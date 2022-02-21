import { Product, Value, Name, Quantity, Info, ProductImage, NoProducts } from "./styles.js"
import { useContext } from "react";
import BasketContext from "../../contexts/BasketContext.js";

function BasketProducts() {
    const { basket, setBasket }  = useContext(BasketContext);
  

    function handleQuantity(id, type) {
        const newProducts = basket.map(product=> {
            if (product._id === id) {
                if (type === "-") product.quantity--;
                if (type === "+") product.quantity++
            }
            if (product.quantity === 0) {
                alert("Tem certeza que deseja remover este item do carrinho?");
            } 
            return product
        });
        const filteredProducts = newProducts.filter(product => product.quantity > 0);
        setBasket(filteredProducts)
    }
        
    return (
        <>
            {basket.length > 0 ? basket.map(product => {
                return (
                    <Product key={product._id}>
                        <ProductImage>
                               <img src={product.image} alt="productimage"></img>
                        </ProductImage>
                        <Info>
                            <Name>{product.name}</Name>
                            <Value>R$ {product.value.toFixed(2)}</Value>
                            <Quantity>
                                <span>Quantidade</span>
                                <button onClick={() => handleQuantity(product._id, "-")}>-</button>
                                <div>{product.quantity}</div>
                                <button onClick={() => handleQuantity(product._id, "+")}>+</button>
                            </Quantity>
                        </Info>
                    </Product>
                );
            }) : <NoProducts>Sem produtos para exibir</NoProducts>}
        </>
    );
};

export default BasketProducts;

