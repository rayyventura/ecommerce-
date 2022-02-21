import { Top, MainContainer, Container, Checkout, Total, Bottom } from "./styles.js"
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useMemo } from "react";
import BasketContext from "../../contexts/BasketContext.js";
import BasketProducts from "./BasketProducts.js";
import UserContext from "../../contexts/UserContext.js";
import axios from "axios";

function BasketPage() {
    const { basket, setBasket }  = useContext(BasketContext);
    const { total, setTotal } = useContext(BasketContext);
    const { info } = useContext(UserContext);
    const navigate = useNavigate();

    const config = useMemo(() => {
        const data = {
            headers: {
                "Authorization": `Bearer ${info.token}`
            }
        }
        return data;
    }, [info.token]);
    function CalculateTotal() {
        useEffect(() => {
            let sum = 0;
            basket.forEach(product => {
                sum+= product.value * product.quantity;
            })
            setTotal(sum)
        })
    }
    CalculateTotal();
        
    function cleanBasket() {
        alert("Tem certeza que deseja remover todos os itens do carrinho?");
        setBasket([])
    }

    function handleCheckout() {
            const promisse = axios.get("https://back-pixels.herokuapp.com/checkout", config);
            promisse.then(response => {
                navigate("/checkout")
            });
            promisse.catch(response => {
                if (response.response.status === 401) {
                    const test = window.confirm("Você precisa estar logado para finalizar sua compra, estamos redirecionando você para a página de login...");
                    if (test) navigate("/signin")
                }
            });
    }

    return (
        <MainContainer>
            <Top>
                <div>
                    <ion-icon name="arrow-back-outline" onClick={() => navigate(-1)}></ion-icon>
                    <span>Carrinho</span>
                    <ion-icon name="trash-outline" onClick={cleanBasket}></ion-icon>
                </div>
            </Top>
            <Container>
                <BasketProducts></BasketProducts>
            </Container>
            <Bottom>
                <Total>
                    <span>Total</span>
                    <div>R$ {total.toFixed(2)}</div>
                </Total>
                <Checkout onClick={handleCheckout} disabled={basket.length === 0}>Checkout</Checkout>
            </Bottom>
        </MainContainer>
    );
};

export default BasketPage;

