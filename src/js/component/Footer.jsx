import React from "react";

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="footer d-flex justify-content-center" id="footer">
            &copy; {currentYear} {""}
            <span> Made with 🦩 by {""}
                <a href="hhttps://www.linkedin.com/in/mjuliafb/">MJ</a>
            </span>
        </div>
    );
};
