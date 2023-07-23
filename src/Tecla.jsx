import React from "react";
import "./Tecla.css"

const Tecla = ({ children , onClick }) => {
    return <button onClick={onClick}>{children}</button>
}

export default Tecla;