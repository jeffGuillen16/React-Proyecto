import React ,{useState}from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Products.scss";
import { Container, Col,Card, Row} from "react-bootstrap";
import Form from 'react-bootstrap/Form';

import { Products } from '../../Data/Products_Data/Products_Data'; // Importa el objeto Products desde tu archivo
/* import BotonMasC from "../../Components/BotonesGallery/BotonMas.js";
import imagenes from "../../Data/Gallery/imagenes.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../../Data/Icons.js";
import { Col, Row, Container, Carousel, Button } from "react-bootstrap";
import { useState } from "react"; */

function Productos() {
    // {/*Se utilizara REACT HOOkS para calcular los primeros 
    // 9 elementos y los bootones se crearan dinamicamente segun cuantas paginas haya*/}
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 9; // Cantidad de productos por página

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = Products.slice(indexOfFirstProduct, indexOfLastProduct);

    const totalPages = Math.ceil(Products.length / productsPerPage);

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
  return (
   
      <Container fluid className="contenedor">
        {/* Primera Columna */}
        <Row className="fila">
          <Col className="columna" sm={3}>

          </Col>
          <Col className="columna1" sm={9}>
            <Row sm={12} className="info">
                <Col sm={4} className="paginas"  >
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button 
                            key={index + 1} 
                            onClick={() => handlePageClick(index + 1)} 
                            className={currentPage === index + 1 ? 'active' : ''}
                        >
                            {index + 1}
                        </button>
                    ))}
                </Col>
                <Col sm={4} className="resultados">
                Mostrando {indexOfFirstProduct + 1}-{indexOfLastProduct} de {Products.length} resultados
                </Col>
                <Col sm={4} className="filtro-ordenP">
                    <Form.Select size="lg" className="custom-select">
                        <option>Ordenar por popularidad</option>
                        <option>Ordenar por los ultimos</option>
                        <option>Ordenar por precio:bajo-alto</option>
                        <option>Ordenar por precio:alto-bajo</option>
                    </Form.Select>
                </Col>
            </Row>
            <Row sm={12} className="contenedor-cards">
            {currentProducts.map((product) => (
                <Card key={product.id} style={{  border: 'none',width: 'calc(27.33% - 20px)', margin: '10px'}}>
                    <Card.Img variant="top" src={product.urlImage} alt={product.altImage} style={{ borderRadius: '0', borderTop: '0' }} />
                    <Card.Body>
                        <Card.Title>{product.productName}</Card.Title>
                        <Card.Text>
                            {product.line}
                            <br></br>
                            ${product.price}
                        </Card.Text>
                    </Card.Body>
                </Card>
            ))}
            </Row>
          </Col>
        </Row>
      </Container>
    
  );
}
export default Productos;
