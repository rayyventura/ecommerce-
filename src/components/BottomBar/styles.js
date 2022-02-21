import styled from "styled-components";

const BottomContainer = styled.div`
    display: flex;
    justify-content: center;
    position: fixed;
    bottom: 0px;

    width: 100%;
    background-color: #E5E5E5;

`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;

    width: 297px;
    margin-top: 15px;
    margin-bottom: 15px;


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
    Bottom, BottomContainer
}