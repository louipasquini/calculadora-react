import React from "react";
import './Input.css';

const Input = ({ inputData , setInputData }) => {

    const handleInput = (e) => {
        setInputData(e.target.value)
    }

    return (
        <>
            <input value={inputData} onChange={handleInput} type="text" />
        </>
    )
}

export default Input;