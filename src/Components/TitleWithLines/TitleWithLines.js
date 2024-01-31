import React from "react";

function TitleWithLines({ titulo })  {

    return(
        <>
            <div className="d-flex justify-content-center align-items-center ">

                <div className="border-bottom flex-grow-1" style={{ border: "3px solid #75BC74"}}></div>
                <h3 className="mx-4 fs-4 text-center">{ titulo }</h3>
                <div className="border-bottom flex-grow-1" style={{ border: "3px solid #75BC74"}}></div>
            
            </div>
        </>
    );
}

export default TitleWithLines;
