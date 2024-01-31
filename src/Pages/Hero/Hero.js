import "./Hero.scss";
import { Container, Col, Row} from 'react-bootstrap';
import { iconsWithText } from "../../Data/Icons_Data/Icons_data";


function Hero() {
    return(
        <>
            <section className="hero">
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
            </section>
        </>
    )
}

export default Hero;
