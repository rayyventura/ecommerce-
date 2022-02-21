import React,{useState, useEffect,useContext} from 'react';
import UserContext from '../../contexts/UserContext';
import axios from 'axios';
import FavoriteIcon from '../../assets/favorite.png'
import { Container,
  Favorites,
  Button,
  Header
}from '../styles/styles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, Link } from 'react-router-dom';
import BottomBar from '../BottomBar';


export default function FavoritesPage() {
    const BaseURL = 'https://back-pixels.herokuapp.com';
    const {info}=useContext(UserContext);
    const [favoriteProducts,setFavoriteProducts]=useState();
    const navigate = useNavigate();
    
    const alert = (text) => toast.error(`${text}`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });


   useEffect(()=>{
     if(!info){
       alert("Você precisa estar logado");
       navigate('/signin');
       return;
     }
      axios.get(`${BaseURL}/favorites`,{
       headers:{
         Authorization: `Bearer ${info.token}`
       }
     }).then(res=>{
       setFavoriteProducts(res.data);
    
     }).catch(alert("Falha ao carregar favoritos"));
   },[info,navigate]);


  function FavoritesModel({product}){
    console.log(product);
    return(
    <div className='block'>
        <img src={product.image} alt={product.description} />
        <div>
        <p  className="description">{product.description}</p>
        <p className="price">{product.value}</p>
        </div>
        <Link to={'/product'} state={product}>
         <Button onClick={()=>navigate('/')}>Adicionar</Button> 
        </Link>
    </div>
    )
    
  }

  return (
    <Container align={'flex-start'}>
            <Header> 
              <ion-icon name="arrow-back-outline" onClick={() => navigate(-1)}></ion-icon>
              Favoritos 
            </Header>
      {
        favoriteProducts? 
        <Favorites>
          {
          favoriteProducts.map(product=>{
            return(
              <FavoritesModel 
              product={product.product}
              />
            )
          })
          }
        </Favorites>
        :
       <div className="empty">
         <img src={FavoriteIcon} alt='Ícone de coração' />
         <p>Você ainda não tem nenhum item na sua lista de desejos</p>
         <Button onClick={()=>navigate('/')}>Adicionar</Button>
    </div>
      }
        <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
            <BottomBar></BottomBar>
    </Container>
  )
}
