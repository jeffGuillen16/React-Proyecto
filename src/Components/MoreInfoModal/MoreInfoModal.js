import React from "react";

import "./MoreInfoModal.scss";
import { projects_data } from "../../Data/Projects_data";

function MoreInfoModal({ selected }) {
    return (
        <div className="moreinfomodal">
            <div className="modal fade" id="moreinfomodal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">
                                {projects_data[selected]?.name}
                            </h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="top_title">
                                <h2>MASTERPLAN</h2>
                                <h1>{projects_data[selected]?.name} Barrio Privado</h1>
                            </div>
                            {!projects_data[selected]?.masterplan ? (
                                <div className="text-center m-5">
                                    <h3 style={{ fontWeight: 700 }}>No Details Provided</h3>
                                </div>
                            ) : null}
                            {projects_data[selected]?.masterplan?.map((plan, i) => (
                                <div key={i} className="info_details">
                                    <div className="img_box">
                                        <img src={plan.image} alt={plan.name} className="my_img" />
                                    </div>
                                    <div className="details">
                                        <h3 className="step">
                                            {plan.step} {plan.name}
                                        </h3>
                                        <h3 className="step">Características de esta etapa</h3>
                                        <p>{plan.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MoreInfoModal;
