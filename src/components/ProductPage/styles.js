import styled from "styled-components";

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;     
    justify-content: center;
    align-items: center;
    position: relative;
    padding-top: 50px;

    min-height: 100vh;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;


    width: 375px;
    /* min-height: 100vh; */
`;

// const Container = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;

//     min-height: 100vh;

const Top = styled.div`
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 25px;
    z-index: 2;

    width: 297px;

    ion-icon {
        font-size: 25px;

        &:hover {
            cursor: pointer;
            color: #70D159;
        }
    }
`;

const ProductPicture = styled.figure`
    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 297px;
    height: 265px;
    background-color: aliceblue;

    img {
        width: 150px;
        height: 150px;
    }
`;

const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 375px;
    margin-top: 10px;
    
    background: #FFFFFF;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
`;

const Name = styled.div`
    margin-top: 25px;

    font-weight: 600;
    font-size: 28px;
    line-height: 33px;

    color: #000000;
`;

const FullDescription = styled.div`

    margin-top: 15px;
    margin-bottom: 25px;


    font-size: 15px;
    line-height: 21px;
    letter-spacing: 0.02em;
    color: #000000;
`;

const Value = styled.div`
    display: flex;
    justify-content: space-between;
    width: 290px;
    margin-bottom: 25px;

    p {
        font-size: 17px;
        line-height: 20px;
        color: #000000;
    }

    span {
        font-weight: bold;
        color: #70D159;
    }
`;

const AddBasket = styled.button`
    width: 297px;
    height: 70px;
    margin-bottom: 25px;

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

export {
    Top, MainContainer, Container, ProductPicture, ProductInfo, FullDescription, Value, AddBasket, Name
}
