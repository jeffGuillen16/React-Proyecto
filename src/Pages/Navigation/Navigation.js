// Navigation.js
import React, { useState } from "react";
import "./Navigation.scss";
import logo from "../../assets/Navigation/logo.png";
import { icons } from "../../Data/Icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BasicExample from "../../Components/DropDown/BasicExample.js";

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleBurgerMenuHover = () => {
    setIsMenuOpen(true);
  };

  const handleBurgerMenuLeave = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={"Navigation"}>
      <nav className="row">
        <div className="col-sm-2 d-flex justify-content-around align-items-center">
          <FontAwesomeIcon
            icon={["fa-bars", icons.BurgerMenu]}
            size="lg"
            className={`brand-menu ${isMenuOpen ? "menu-open" : ""}`}
            onMouseEnter={handleBurgerMenuHover}
            onMouseLeave={handleBurgerMenuLeave}
          />
          <img
            src={logo}
            className="brand-logo"
            alt="logo"
            style={{ width: "55px", height: "55px", cursor: "auto" }}
          />
        </div>
        <div className="col-sm">
          <BasicExample></BasicExample>
        </div>
        <div className="col-sm">
          <span>ILUSTRADORES</span>
          <FontAwesomeIcon
            icon={["fa-chevron-down", icons.chevronDown]}
            size="lg"
            className="brand-chevron"
          />
        </div>
        <div className="col-sm">
          <span>COLECCIONES</span>
          <FontAwesomeIcon
            icon={["fa-chevron-down", icons.chevronDown]}
            size="lg"
            className="brand-chevron"
          />
        </div>
        <div className="col-sm">
          <span>NOSOTROS</span>
        </div>
        <div className="col-sm-4">
          <FontAwesomeIcon
            icon={["fa-magnifying-glass", icons.MagnifyingGlass]}
            size="lg"
            className="brand-logo"
          />
          <div className="shopping">
            CARRITO/$0
            <FontAwesomeIcon
              icon={["fa-cart-shopping", icons.faCartShopping]}
              size="lg"
            />
          </div>
        </div>
      </nav>
      <div className={`menu ${isMenuOpen ? "menu-open" : ""}`}>
        <div className="menu-items">
          <span>Ofertas</span>
        </div>
        <div className="menu-items">
          <span>Novedades</span>
        </div>
        <div className="menu-items">
          <span>Preguntas Frecuentes</span>
        </div>
        <div className="menu-items">
          <span>Sugerencias</span>
        </div>
        <div className="menu-items">
          <span>Contacto</span>
        </div>
        <div className="menu-items">
          <span>Términos y condiciones</span>
        </div>
        <div className="menu-items">
          <span>¿Querés trabajar con nosotros?</span>
        </div>
        b
      </div>
    </div>
  );
};

export default NavigationBar;
