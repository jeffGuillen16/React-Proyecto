import React from "react";
import { Card, CardBody, CardTitle } from "react-bootstrap";

function Product({ productName, price, urlImage, altImage})  {

    return(
        <>
            <Card style={{width: "auto", border: "none", background: 'transparent'}}>

                <Card.Img  style={{borderRadius:"0"}} variant="top" src={urlImage} class="card-img-top" alt={altImage}/>
                
                <CardBody style={{paddingLeft:'0', paddingTop:'10'}}>

                    <CardTitle className="fw-normal">{productName}</CardTitle>
                    <Card.Text className="fw-bolder">$ {price}</Card.Text>
                
                </CardBody>
            
            </Card>
        </>
    );
}

export default Product;