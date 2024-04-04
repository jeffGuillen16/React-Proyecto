import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { navigation_data } from "../../Data/Navigation_data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../../Data/Icons.js";

import "./Navigation.scss";

function Navigation() {
  const primeraImagen = navigation_data[0][0];

  return (
    <Navbar
      expand="lg"
      style={{
        position: "fixed",
        zIndex: "900",
        width: "100%",
        padding: "0",
        margin: "0",
      }}
    >
      <Container className="d-flex">
      <div className="brand-mobile">
                  <img
                    src={primeraImagen.image}
                    alt={`Imagen ${primeraImagen.id}`}
                    width={"75px"}
                    height={"75px"}
                  />
                </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="my-custom-class w-100 ">
            <div className="row w-100">
              <div className="col-8 col-lg-8 nav-dropDown d-flex justify-content-center align-items-center">
                <div className="brand-logo">
                  <img
                    src={primeraImagen.image}
                    alt={`Imagen ${primeraImagen.id}`}
                    width={"75px"}
                    height={"75px"}
                  />
                </div>
                <NavDropdown
                    title="PRODUCTOS"
                    id="productos-nav-dropdown"
                    href="#productos"
                    className="navItemsText"
                  />
                  <NavDropdown
                    title="ILUSTRADORES"
                    id="ilustradores-nav-dropdown"
                    href="#ilustradores"
                    className="navItemsText"
                  />
                  <NavDropdown
                    title="COLECCIONES"
                    id="colecciones-nav-dropdown"
                    href="#colecciones"
                    className="navItemsText"
                  />
                <Nav.Link className="navItemsText" href="#nosotros">
                  NOSOTROS
                </Nav.Link>
                <div className="brand-buscador">
                  <a className="icons" href="/">
                    <FontAwesomeIcon
                      icon={["fas", icons.MagnifyingGlass]}
                      size="lg"
                      className="brand-menu"
                      style={{
                        color: "#000",
                        backgroundColor: "transparent",
                        marginLeft: "30px",
                      }}
                    />
                  </a>
                </div>
              </div>
              <div className="col-4 col-lg-4 brand-icon d-flex justify-content-end align-items-center">
                <div className="icon-first d-flex justify-content-center align-items-center" style={{marginRight:"30px"}}>
                  <div className="brand-cart">
                    <a className="icons" href="/">
                      <FontAwesomeIcon
                        icon={["fa", icons.faCartShopping]}
                        size="lg"
                        style={{ color: "#000" }}
                        className="icono-carrito"
                      />
                    </a>
                  </div>
                </div>
                <div className="icon-second d-flex  justify-content-between align-items-center "> 
                  <a className="icons-fab" href="/">
                    <FontAwesomeIcon
                      icon={["fab", icons.Facebook]}
                      size="lg"
                      style={{ color: "#000"
                       }}
                      
                    />
                  </a>

                  <a className="icons-fab" href="/">
                    <FontAwesomeIcon
                      icon={["fab", icons.Instagram]}
                      size="lg"
                      style={{ color: "#000" }}
                    />
                  </a>

                  <a className="icons-fab" href="/">
                    <FontAwesomeIcon
                      icon={["fab", icons.Tiktok]}
                      size="lg"
                      style={{ color: "#000" }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;