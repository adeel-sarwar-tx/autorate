import React from 'react';
import LogosImage from "../images/logos.png";

export default function Logos() {
    return (
        <div className="logos-container">
            <img className="logos" src={LogosImage} alt="Logo" />
        </div>
    )
}
