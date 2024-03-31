//Footer
import "./Footer.scss";
import { Container, Col, Row } from "react-bootstrap";
import logotipos from "../../Data/Footer/logotipos";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Col md={12} xs={12} className="fila ">
          <Link to="/" className=" mx-1 justify-content-center" >
            <img src={logotipos.pay} alt="paypal" className="logo" />
          </Link>
          <Link to="/" className="mx-1 justify-content-center">
            <img src={logotipos.pay} alt="paypal" className="logo" />
          </Link>
          <Link to="/" className="mx-1 justify-content-center">
            <img src={logotipos.pay} alt="paypal" className="logo" />
          </Link>
          <Link to="/" className=" mx-1 justify-content-center">
            <img src={logotipos.pay} alt="paypal" className="logo" />
          </Link>
        </Col>
        <Col md={12} xs={12} className="fila">
          <Row className="fila0">
            <Col className="fila1" md={12}>
              <Link className="mx-3 texto" md={4} >
                SOBRE LA TIENDA
              </Link>
              <Link className="mx-3 texto" md={4}  >
                FORMAS DE ENTREGA FRENTE AL COVID-19
              </Link>
              <Link className="mx-3 texto" md={4} >
                TERMINOS Y CONDICIONES
              </Link>
            </Col>
            <Col md={12} className="fila1">
              <Link className="derechos">
                Eco Darkness Tienda Todos los derechos reservados 2021
              </Link>
            </Col>
          </Row>
        </Col>
      </Container>
    </footer>
  );
}

export default Footer;
