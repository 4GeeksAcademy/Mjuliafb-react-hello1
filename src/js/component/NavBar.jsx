import React from "react";

export const NavBar = () => {
    return (
        <div className="bg-success">
            <div className="container">
                <nav className="navbar navbar-expand-md sticky-md-top">
                    <div className="container-fluid ">
                        <a className="navbar-brand" href="#">🎅🤶</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end p-2" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                                <a className="nav-link" href="#header">About</a>
                                <a className="nav-link" href="#cards">To Do</a>
                                <a className="nav-link" href="#footer">Contact</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>


    )
};

