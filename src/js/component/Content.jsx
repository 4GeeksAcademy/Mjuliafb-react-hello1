import React from "react";
import { Jumbotron } from "./Jumbotron";
import { Cards } from "./Cards";

export const Content = () => {
    return (
        <div className="container justify-items-center">
            <Jumbotron />
            <Cards />
        </div>
    )
};