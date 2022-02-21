import axios from "axios";
import { useContext, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import BasketContext from "../../contexts/BasketContext";
import { ProductDescription, ProductPicture, Product } from "./styles"

function Products({category}) {
    const { products, setProducts } = useContext(BasketContext);

    const config = useMemo(() => {
        const data = {
            headers: {
                category: category
            }
        }
        return data;
    }, [category]);

    useEffect(() => {
        const promisse = axios.get("https://back-pixels.herokuapp.com/products", config);
        promisse.then(response => {
            setProducts(response.data)
        });
        promisse.catch(response => {
            console.log(response);
        });
    }, [config, setProducts]);

    return (
        products.map(product => {
            return (
                <Link to={"/product"} key={product._id} state={product}>
                    <Product>
                        <ProductPicture>
                            <img src={product.image} alt="iphone"></img>
                        </ProductPicture>
                        <ProductDescription>
                            {product.name}
                            <p>{product.shortDescription}</p>
                            <div>R$ {product.value}</div>
                        </ProductDescription> 
                    </Product>
                </Link>
            );
        })
    );
}

export default Products;