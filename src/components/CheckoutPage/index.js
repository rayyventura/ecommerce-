import { Top, MainContainer, Container, Checkout, Total, Bottom } from "./styles.js"
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useMemo, useState } from "react";
import BasketContext from "../../contexts/BasketContext.js";
import UserContext from "../../contexts/UserContext.js";
import axios from "axios";
import styled from "styled-components";


function CheckoutPage() {
    const { total, setTotal, basket, setBasket }  = useContext(BasketContext);
    const { info } = useContext(UserContext);
    const [ checked, setChecked ] = useState(true);
    const navigate = useNavigate();
    
    const config = useMemo(() => {
        const data = {
            headers: {
                "Authorization": `Bearer ${info.token}`
            }
        }
        return data;
    }, [info.token]);

    const data = useMemo(() => {
        const productsIds = basket.map(product => {
            return product._id
        })
        const dta = {
                items : productsIds
            }
        return dta;
    }, [basket]);

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

    function handlePayment() {
            const promisse = axios.post("https://back-pixels.herokuapp.com/checkout", data, config);
            promisse.then(response => {
                alert("Parabéns, sua compra foi concluída!");
                setBasket([]);
                navigate("/")
            });
            promisse.catch(response => {
                console.log(response);
            });
    }

    return (
        <MainContainer>
            <Top>
                <div>
                    <ion-icon name="arrow-back-outline" onClick={() => navigate(-1)}></ion-icon>
                    <span>Checkout</span>
                    <p></p>
                </div>
            </Top>
            <Container>
                <span>Informações de entrega</span>
                <ShippingInformation>
                    <div>
                        <ion-icon name="person-outline"></ion-icon>
                        {info.name}
                    </div>
                    <div>
                        <ion-icon name="location-outline"></ion-icon>
                        {info.address}
                    </div>
                </ShippingInformation>
                <span>Meio de pagamento</span>
                <PaymentMethod>
                    <form>
                        <div>
                            <input type="radio" name="payment" onChange={()=>setChecked(false)}></input>
                            <div>
                                <ion-icon name="card-outline"></ion-icon>
                                <span>**** **** **** 1234</span>
                            </div>
                        </div>
                        <div>
                            <input type="radio" name="payment" onChange={()=>setChecked(false)}></input>
                            <div>
                                <ion-icon name="card-outline"></ion-icon>
                                <span>**** **** **** 4567</span>
                            </div>
                        </div>
                        <div>
                            <input type="radio" name="payment" onChange={()=>setChecked(false)}></input>
                            <div>
                                <ion-icon name="cash-outline"></ion-icon>
                                <span>**** **** **** 1234</span>
                            </div>
                        </div>
                    </form>
                </PaymentMethod>
            </Container>
            <Bottom>
                <Total>
                    <span>Total</span>
                    <div>R$ {total.toFixed(2)}</div>
                </Total>
                <Checkout onClick={handlePayment} disabled={checked}>Confirmar e pagar</Checkout>
            </Bottom>
        </MainContainer>
    );
};

export default CheckoutPage;

const ShippingInformation = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 297px;
    margin-top: 15px;
    margin-bottom: 15px;
    padding: 15px;
    gap: 15px;
    
    background: #FFFFFF;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.06);
    border-radius: 20px;

    ion-icon {
        margin-right: 10px;
    }
`;

const PaymentMethod = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 297px;
    margin-top: 15px;
    padding: 15px;
    gap: 15px;
    
    background: #FFFFFF;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.06);
    border-radius: 20px;

    input {
        margin-right: 10px;
    }

    span {
        font-weight: bold;
    }

    div {
        display: flex;
        align-items: center;
    }

    ion-icon {
        font-size: 50px;
        margin-right: 10px;
    }
`;