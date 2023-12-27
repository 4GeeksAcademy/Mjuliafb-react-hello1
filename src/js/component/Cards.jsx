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
            buttonText: "Restaurantes",
            link: "https://www.tripadvisor.es/Restaurants-g187514-c10715-Madrid.html"
        },
        {
            imgSrc: decorar,
            title: "Decorar 🎄",
            text: "With supporting text below as a natural lead-in to additional content 2.",
            buttonText: "Ideas DIY",
            link: "https://www.pinterest.es/search/pins/?q=ideas%20DIY%20navidad&rs=typed"
        },
        {
            imgSrc: regalos,
            title: "Regalar 🎁",
            text: "With supporting text below as a natural lead-in to additional content 2.",
            buttonText: "Mi lista Tech",
            link: "https://www.amazon.es/s?k=logitech+mx&__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2P0N8RRGB48NN&sprefix=logitech+mx%2Caps%2C156&ref=nb_sb_noss_1"
        },
        {
            imgSrc: musica,
            title: "A chirrin chirra 🎵",
            text: "With supporting text below as a natural lead-in to additional content 2.",
            buttonText: "Canta conmigo",
            link: "https://open.spotify.com/playlist/31O6T30ba0HzzdvcrlWH9Y"
        },
    ];

    return (
        <div className="container text-center" id="cards">
            <div className="row">
                {cardData.map((card, index) => (
                    <div key={index} className="contentCard col-md-6 col-lg-3 mb-4">
                        <div className="card">
                            <img src={card.imgSrc} className=" card-img-top img-responsive" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{card.title}</h5>
                                <p className="card-text">{card.text}</p>
                                <a href={card.link} target="_blank" className="btn btn-dark">
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

