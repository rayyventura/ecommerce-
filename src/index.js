import reactDom from "react-dom";
import App from "./App";
import "./style/reset.css";
import "./style/style.css";

const root = document.querySelector(".root");
reactDom.render(<App />, root);