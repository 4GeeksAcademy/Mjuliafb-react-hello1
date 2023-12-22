import React from "react";

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-success sticky-md-top p-2">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">🎅🤶</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-end p-2" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        <a className="nav-link" href="#header">About</a>
                        <a className="nav-link" href="#cards">To Do</a>
                        <a className="nav-link" href="#footer">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    )
};

