import React from "react";

import "./CustomButton.scss";

function CustomButton({ name, handleClick, children }) {
    return (
        <button className="custombutton p-0" onClick={handleClick}>
            <div className="container-fluid">
                {children ? (
                    <div className="row">
                        <div className="col-10 d-flex justify-content-center align-items-center">{name}</div>
                        <div className="col-2 text-center bg-light justify-content-center align-items-center">{children}</div>
                    </div>
                ) : (
                    <div className="row">
                        <div className="col">{name}</div>
                    </div>
                )}
            </div>
        </button>
    );
}

export default CustomButton;
