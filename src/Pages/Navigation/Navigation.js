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
            className="brand-menu"
          />
          <img
            src={logo}
            className="brand-logo"
            alt="logo"
            style={{ width: "55px", height: "55px", cursor: "auto" }}
          />
        </div>
        <div className="col-sm">
          PRODUCTOS
          <FontAwesomeIcon
            icon={["fa-chevron-down", icons.chevronDown]}
            size="lg"
            className="brand-chevron"
          />{" "}
        </div>
        <div className="col-sm">
          ILUSTRADORES
          <FontAwesomeIcon
            icon={["fa-chevron-down", icons.chevronDown]}
            size="lg"
            className="brand-chevron"
          />
        </div>
        <div className="col-sm">
          COLECCIONES
          <FontAwesomeIcon
            icon={["fa-chevron-down", icons.chevronDown]}
            size="lg"
            className="brand-chevron"
          />
        </div>
        <div className="col-sm">NOSOTROS</div>
        <div className="col-sm-4">
          <FontAwesomeIcon
            icon={["fa-bars", icons.MagnifyingGlass]}
            size="lg"
            className="brand-logo"
          />
          <div className="shopping">CARRITO/$0
          <FontAwesomeIcon
            icon={["fa-cart-shopping", icons.faCartShopping]}
            size="lg"
          />
        </div>
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;
