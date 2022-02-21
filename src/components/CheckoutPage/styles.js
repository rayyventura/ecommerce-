import styled from "styled-components";

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;     
    align-items: center;
    justify-content: center;

    position: relative;
    padding-top: 50px;
    padding-bottom: 160px;

    min-height: 100vh;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 375px;
`;
const Top = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0px;
    z-index: 2;

    height: 50px;
    width: 100%;
    background-color: #E5E5E5;

    div {
        display: flex;
        justify-content: space-between;
        width: 297px;
    }

    span {
        font-weight: bold;
    }

    ion-icon {
        font-size: 25px;

        &:hover {
            cursor: pointer;
            color: #70D159;
        }
    }

    span {
        display: flex;
        align-items: center;
    }
`;

const Product= styled.div`
    display: flex;
    align-items: center;

    width: 297px;
    margin-top: 10px;
    padding: 10px;
    gap: 5px;
    
    background: #FFFFFF;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
`;

const Name = styled.div`
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;

    color: #000000;
`;

const Value = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;

    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
    color: #70D159;
`;

const Checkout = styled.button`
    width: 297px;
    height: 70px;
    margin-top: 25px;
    margin-bottom: 10px;

    background-color: #424242;
    border: 0;

    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.1);
    border-radius: 10px;

    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    text-align: center;

    color: #F6F6F9;

    &:hover {
        cursor: pointer;
        background-color: #70D159;
    }
`;

const ProductImage = styled.div`
    height: 100px;
    width: 100px;

    img {
   
        height: 100px;
        width: 100px;  
    }
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 70px;

    div {
        font-size: 15px;
    }
`;

const Total = styled.div`
    display: flex;
    justify-content: space-between;
    width: 297px;
    padding-left: 5px;
    padding-right: 5px;

    margin-top: 25px;

    div {
        font-weight: bold;
        font-size: 18px;
        line-height: 20px;
        color: #70D159;
    }
`;

const Quantity = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;

    button {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 17px;
        height: 17px;

        color: #ffffff;
        background-color: #424242;
        border: 0;
        border-radius: 50%;

        &:hover {
            cursor: pointer;
            background-color: #70D159;
        }
    }
`;

const Bottom = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    bottom: 0px;
    z-index: 2;

    width: 100%;
    background-color: #E5E5E5;
`;

const NoProducts = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 450px;
`;

export {
    Top, MainContainer, Container, Product, Value, Name, Checkout, Quantity, Total, Info, ProductImage, Bottom, NoProducts
}
