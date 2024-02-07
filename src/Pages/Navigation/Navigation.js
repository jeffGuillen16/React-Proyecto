
// NavbarComponent.jsx

import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavbarComponent = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        {/* Logo */}
        <Navbar.Brand href="#home">
          <img
            src="ruta-al-logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>

        {/* Espaciador */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-space-around" style={{ display:"flex", justifyContent:"" }}>
          <Nav className="mr-auto">
            <Nav.Link href="#productos">Productos</Nav.Link>
            <Nav.Link href="#ilustradores">Ilustradores</Nav.Link>
            <Nav.Link href="#colecciones">Colecciones</Nav.Link>
            <Nav.Link href="#nosotros">Nosotros</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
