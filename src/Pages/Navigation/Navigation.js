// Navigation.js
import "./Navigation.scss";
import React from "react";
import logo from "../../assets/Navigation/logo.png";
import { icons } from "../../Data/Icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavigationBar = () => {
  return (
    <div className="Navigation">
      <nav className="row">
        <div className="col-sm-2 d-flex justify-content-around align-items-center">
          <FontAwesomeIcon
            icon={["fa-bars", icons.BurgerMenu]}
            size="lg"
            className="brand-logo"
          />
        <img src={logo} className="logo" alt="logo" style={{ width: '55px', height: '55px' }} />
        </div>
        <div className="col-sm">Productos</div>
        <div className="col-sm">Ilustradores</div>
        <div className="col-sm">Colecciones</div>
        <div className="col-sm">Nosotros</div>
        <div className="col-sm-5">
        <FontAwesomeIcon
            icon={["fa-bars", icons.MagnifyingGlass]}
            size="lg"
            className="brand-logo"
          />

        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;

