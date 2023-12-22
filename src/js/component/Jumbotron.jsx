import React from "react";

export const Jumbotron = () => {
    return (
        <div className="p-5 mb-4 bg-light rounded-3" id="header">
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">Felices fiestas!</h1>
                <p className="col-md-12 fs-4">La Navidad no solo marca el final del año, sino que encapsula el espíritu de compartir, celebrar <br></br> y cultivar la paciencia humana, convirtiéndola en una época verdaderamente exepcional.</p>
                <a href="#cards" className="btn btn-dark btn-lg">
                    ¿Qué hacer?
                </a>
            </div>
        </div>
    )
};