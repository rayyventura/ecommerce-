import { Top, MainContainer, Container, Name, ProductInfo, FullDescription, Value, AddBasket } from "./styles.js"
import SimpleImageSlider from "react-simple-image-slider";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useMemo, useState } from "react";
import BasketContext from "../../contexts/BasketContext.js";
import axios from "axios";
import UserContext from "../../contexts/UserContext.js";

// somente para testar o slider
const images = [
    { url: "https://files.tecnoblog.net/wp-content/uploads/2021/09/iphone-13-produto-2-700x700.png" },
    { url: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pink-select-2021?wid=940&hei=1112&fmt=png-alpha&.v=1629842709000" },
    { url: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-mini-blue-select-2021?wid=940&hei=1112&fmt=png-alpha&.v=1629842711000" },
    { url: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-mini-product-red-select-2021?wid=940&hei=1112&fmt=png-alpha&.v=1629907845000" },
  ];
//.............................

function ProductPage() {
    const { basket, setBasket }  = useContext(BasketContext);
    const navigate = useNavigate();
    const location = useLocation();
    const product = location.state;
    const [ added, setAdded]=useState(false);
    const { info } = useContext(UserContext);
    const BaseURL = 'https://back-pixels.herokuapp.com';


    function handleBasket() {
        if (basket.length === 0) {
            setBasket([...basket, product]);
        } else {
            basket.forEach(basketProduct => {
                if (product._id === basketProduct._id) {
                    alert("Produto já adicionado ao carrinho")
                } else {
                    setBasket([...basket, product]);
                }
            })
        }
    }
   
        useMemo(()=>{
            if(product.favorite===true){
                setAdded(true); 
            }
        },[product.favorite]);
    

    const config = useMemo(() => {
        const data = {
            headers: {
                "Authorization": `Bearer ${info.token}`
            }
        }
        return data;
    }, [info.token]);

    function addFavorites(){
        added ? setAdded(false) : setAdded(true);
         if(product.favorites===true){
             axios.delete(`${BaseURL}/favorites`,product,config);
         }else{
             if(!info){
                 alert("Você precisa estar logado para favoritar");
                 navigate('/signin');
                 return;
             }
             axios.post(`${BaseURL}/favorites`, product, config).then(res=>console.log(res)).catch(res=>console.log(res));
    
         }
     }

    return (
        <MainContainer>
            <Top>
                <ion-icon name="arrow-back-outline" onClick={() => navigate(-1)}></ion-icon>
                { 
                added? 
                 <ion-icon name="heart" onClick={() => addFavorites()}></ion-icon>
                 :
                <ion-icon name="heart-outline" onClick={() => addFavorites()}></ion-icon>
                }
            </Top>
            <Container>
                <SimpleImageSlider
                    width={297}
                    height={265}
                    images={images}
                    showBullets={true}
                    showNavs={true}
                    bgColor={"#E5E5E5"}
                    navSize={20}
                    />
                <ProductInfo>
                    <Name>{product.name}</Name>
                    <FullDescription>{product.description}</FullDescription>
                    <Value><p>Apartir de</p><span>R$ {product.value.toFixed(2)}</span></Value>
                    <AddBasket onClick={handleBasket}>Adicionar ao carrinho</AddBasket>
                </ProductInfo>
            </Container>
        </MainContainer>
    );
};

export default ProductPage;