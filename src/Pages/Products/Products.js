import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import './Products.scss';
import { Container,Col } from "react-bootstrap";
/* import BotonMasC from "../../Components/BotonesGallery/BotonMas.js";
import imagenes from "../../Data/Gallery/imagenes.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../../Data/Icons.js";
import { Col, Row, Container, Carousel, Button } from "react-bootstrap";
import { useState } from "react"; */


function Products (){

    return(
        <Container fluid className="contenedor">
            {/* Primera Columna */}
            <Col
                className="bg-danger"
                md={3}
                xs={12}
            >
            </Col>
            <Col
                className="bg-dark"
                md={9}
                xs={12}
            >
            </Col>
        </Container>
    );
}
export default Products;