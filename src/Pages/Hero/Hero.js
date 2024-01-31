import "./Hero.scss";
import { Container, Col, Row} from 'react-bootstrap';
import { iconsWithText } from "../../Data/Icons_Data/Icons_data";
import TitleWithLines from '../../Components/TitleWithLines/TitleWithLines';
import Product from '../../Components/Product/Product'
import { Products } from '../../Data/Products_Data/Products_Data';


function Hero() {
    const lastestProducts = Products.slice(-5);

    return(
        <>
            <div className="hero">

                <Container fluid className="text-center mt-5">
                        
                        <Row className="justify-content-evenly column-gap-5">
                            {iconsWithText.map(function (iconText) {
                                return (
                                <Col className="mb-5 mx-1" xs={7} md={4} lg={3} xl={2}>

                                    <img src={iconText.urlSVG} className="svg-img" alt={iconText.altSVG}/>
                                    <h3 className="text-uppercase fs-5 fw-semibolder pt-5">{iconText.title}</h3>
                                    <p className="text-justify">{iconText.content}</p>

                                </Col>
                                );
                            })}
                        </Row>
                </Container>

                <section className="products_container">
                        <TitleWithLines titulo="REVISA NUESTROS ÚLTIMOS PRODUCTOS" />
                        
                        <Container fluid className="mt-5">
                            <Row className={`justify-content-${window.innerWidth >= 992 ? 'between' : 'around'} column-gap-5`}>
                                {lastestProducts.map(function (product) {
                                    return(
                                        <Col className="mb-5" xs={6} md={4} lg={3} xl={2}>
                                            <Product
                                                key={product.id}
                                                urlImage={product.urlImage}
                                                altImage={product.altImage}
                                                productName={product.productName}
                                                price={product.price} />
                                        </Col>
                                    );
                                })}
                            </Row>
                        </Container>
                        

                </section>
            </div>
        </>
    )
}

export default Hero;
