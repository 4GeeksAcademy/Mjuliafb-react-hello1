import React from "react";
import comida from "../../img/comida.jpg"
import decorar from "../../img/decorar.jpg"
import musica from "../../img/musica.jpg"
import regalos from "../../img/regalos.jpg"

export const Cards = () => {
    // Array de datos para cada tarjeta
    const cardData = [
        {
            imgSrc: comida,
            title: "Comer 🍾",
            text: "With supporting text below as a natural lead-in to additional content 1.",
            buttonText: "Restaurantes"
        },
        {
            imgSrc: decorar,
            title: "Decorar 🎄",
            text: "With supporting text below as a natural lead-in to additional content 2.",
            buttonText: "Ideas DIY"
        },
        {
            imgSrc: regalos,
            title: "Regalar 🎁",
            text: "With supporting text below as a natural lead-in to additional content 2.",
            buttonText: "Mi lista Tech"
        },
        {
            imgSrc: musica,
            title: "Achirrin chirra 🎵",
            text: "With supporting text below as a natural lead-in to additional content 2.",
            buttonText: "Canta conmigo"
        },
    ];

    return (
        <div className="container text-center" id="cards">
            <div className="row">
                {cardData.map((card, index) => (
                    <div key={index} className="col-md-6 col-lg-3 mb-4 p-0">
                        <div className="card">
                            <img src={card.imgSrc} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{card.title}</h5>
                                <p className="card-text">{card.text}</p>
                                <a href="#" className="btn btn-primary">
                                    {card.buttonText}
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

