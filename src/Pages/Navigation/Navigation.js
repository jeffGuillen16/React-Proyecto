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
          <img
            src={logo}
            className="logo"
            alt="logo"
            style={{ width: "55px", height: "55px" }}
          />
        </div>
        <div className="col">
          PRODUCTOS
          <FontAwesomeIcon
            icon={["fa-chevron", icons.chevronDown]}
            size="lg"
            className="brand-logo fa-chevron" // Añadí la clase específica para el ícono de chevron
          />
        </div>
        <div className="col">
          CONTACTO
          <FontAwesomeIcon
            icon={["fa-chevron", icons.chevronDown]}
            size="lg"
            className="brand-logo fa-chevron" // Añadí la clase específica para el ícono de chevron
          />
        </div>
        <div className="col-sm-2">
          PREGUNTAS FRECUENTES
          <FontAwesomeIcon
            icon={["fa-chevron", icons.chevronDown]}
            size="lg"
            className="brand-logo fa-chevron" // Añadí la clase específica para el ícono de chevron
          />
        </div>
        <div className="col-sm-2">QUIENES SOMOS</div>
        <div className="col-sm-3">
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