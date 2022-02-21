import styled from "styled-components";

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;     
    justify-content: center;
    align-items: center;
    position: relative;

    min-height: 100vh;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;

    padding-left: 39px;

    width: 375px;
`;

const Top = styled.div`
    display: flex;
    margin-right: auto;
    position: absolute;
    top: 25px;

    ion-icon {
        font-size: 50px;
    }
`;

const SearchBox = styled.div`
    display: flex;
    align-items: center;

    width: 237px;
    height: 50px;
    padding-left: 10px;
    margin-left: 10px;

    border: 2px solid #C9C9C9;
    border-radius: 30px;

    ion-icon {
        font-size: 20px;
    }
`;

const Title = styled.h1`
    display: flex;
    width: 243px;
    height: 70px;
    margin-top: 25px;

    font-weight: bold;
    font-size: 34px;
    line-height: 40px;

    color: #000000;
`;

const Categories = styled.div`
    display: flex;
    align-items: center;

    height: 50px;
    margin-top: 25px;
    overflow: auto;

    button {
        margin-right: 10px;

        font-weight: 600;
        font-size: 17px;
        line-height: 20px;
        color: #9A9A9D;
        background-color: #E5E5E5;
        border: 0;

        &:hover {
            cursor: pointer;
            color: #70D159;
        }
    }
`;

const ProductsContainer = styled.div`
    display: flex;
    align-items: end;
    height: 318px;
    margin-top: 25px;
    overflow: auto;
`;

const Product = styled.div`
    display: flex;
    justify-content: center;

    position: relative;
    min-width: 220px;
    height: 270px;
    margin-right: 30px;

    background: #FFFFFF;
    box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
    border-radius: 20px;
`;

const ProductPicture = styled.figure`
    display: flex;
    align-items: center;
    justify-content: center;
    
    position: absolute;
    width: 150px;
    height: 150px;
    left: 37.5px;
    top: -45px;
    border-radius: 50%;

    background: #424242;

    img {
        width: 120px;
        height: 120px;
    }
`;

const ProductDescription = styled.span`
    width: 100%;
    text-align: center;

    font-weight: 600;
    font-size: 22px;
    line-height: 22px;
    color: #000000;

    overflow: auto;

    margin-top: 135px;

    p {
        font-size: 16px;
        color: #868686;
    }

    div {
        margin-top: 25px;

        font-weight: bold;
        font-size: 17px;
        line-height: 20px;
        text-align: center;

        color: #70D159;
    }
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 15px;

    width: 297px;
    margin-top: 35px;

    ion-icon {
        font-size: 25px;

        &:hover {
            cursor: pointer;
            color: #70D159;
        }
    }
    
    div {
        position: relative;
    }

    div div {
        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        top: -7px;
        right: -5px;

        height: 17px;
        width: 17px;

        font-size: 13px;
        color: #ffffff;
        background-color: red;

        border-radius: 50%;
    }
`;

export {
    Bottom, ProductDescription, ProductPicture, Product, ProductsContainer, Categories, Title, SearchBox, Top, Container, MainContainer
}