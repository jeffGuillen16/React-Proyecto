import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./PlayButton.scss";

function PlayButton({ icon, name, handleClick }) {
    return (
        <button className="playbutton p-0" onClick={handleClick}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2 p-0 d-flex justify-content-center align-items-center">
                        <div className="btn_play d-flex justify-content-center align-items-center">
                            <FontAwesomeIcon icon={icon} size="lg" color="white" className="icon" />
                        </div>
                    </div>
                    <div className="col-10 text-center d-flex justify-content-start align-items-center">
                        <p className="play_name m-0">{name}</p>
                    </div>
                </div>
            </div>
        </button>
    );
}

export default PlayButton;
