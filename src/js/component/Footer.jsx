import React from "react";

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="footer">
            &copy; {currentYear}
            <span> Made with 🦩 by
                <a href="https://www.linkedin.com/in/mjfbalice/"> MJ</a>
            </span>
        </div>
    );
};
