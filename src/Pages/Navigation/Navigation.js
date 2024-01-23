// Navigation.js
import "./Navigation.scss";
import React from "react";
import logo from "../../assets/Navigation/logo.png";
import { icons } from "../../Data/Icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavigationBar = () => {
  return (
    <div className="Navigation">
      <nav className="row align-items-center">
        <div class="col-sm-2">
          <div className="d-flex justify-content-around align-items-center">
            <FontAwesomeIcon
              icon={["fa-bars", icons.BurgerMenu]}
              size="2x"
              className="brand-logo"
            />
            <img src={logo} className="logo" alt="logo" />
          </div>
        </div>
        <div class="col-sm">Productos</div>
        <div class="col-sm">Ilustradores</div>
        <div class="col-sm">Colecciones</div>
        <div class="col-sm">Sobre Nosotros</div>
        <div class="col-sm-5">icon buscador</div>
      </nav>
    </div>
  );
};

export default NavigationBar;
