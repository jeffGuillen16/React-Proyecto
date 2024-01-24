import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { faArrowUpRightFromSquare, faBars , faChevronDown,faCartShopping} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { BrowserRouter } from "react-router-dom";
import { fab, faFacebook, faInstagram, faTiktok, faWhatsapp, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import {
    faClock,
    faHouse,
    faCaretDown,
    faAngleRight,
    faAngleLeft,
    faLocationDot,
    faPlay,
    faAward,
    faMagnifyingGlass,
    faCircleCheck,
    faEnvelope,
    faCaretUp,
} from "@fortawesome/free-solid-svg-icons";

library.add(
    fab,
    faInstagram,
    faTiktok,
    faFacebook,
    faWhatsapp,
    faClock,
    faHouse,
    faCaretDown,
    faAngleRight,
    faAngleLeft,
    faLocationDot,
    faPlay,
    faAward,
    faMagnifyingGlass,
    faCircleCheck,
    faEnvelope,
    faCaretUp,
    faBars,
    faFacebookF,
    faArrowUpRightFromSquare,
    faChevronDown,
    faCartShopping
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
