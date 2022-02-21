import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import BasketContext from "../../contexts/BasketContext";
import { Bottom, BottomContainer } from "./styles"

function BottomBar() {
    const { basket } = useContext(BasketContext);
    const navigate = useNavigate();

    return (
        <BottomContainer>

        <Bottom>
            <ion-icon name="home-outline" onClick={() => navigate("/")}></ion-icon>
            <ion-icon name="heart-outline" onClick={() => navigate("/favorites")}></ion-icon>
            <ion-icon name="person-outline" onClick={() => navigate("/profile")}></ion-icon>
            <div onClick={() => navigate("/basket")}>
                <ion-icon name="cart-outline"></ion-icon>
                <div>{basket.length}</div>
            </div>
        </Bottom>
        </BottomContainer>
    );
}

export default BottomBar;