import React from "react";
import Tecla from "./Tecla";
import Input from "./Input";
import { useState } from "react";

const Teclado = () => {
    const [inputData,setInputData] = useState('')

    const resultado = (e) => {
        setInputData(eval(inputData))
    }

    const somar = (e) => {
        const newData = inputData + '+'
        setInputData(newData)
    }

    const subtrair = (e) => {
        const newData = inputData + '-'
        setInputData(newData)
    }

    const dividir = (e) => {
        const newData = inputData + '/'
        setInputData(newData)
    }

    const multiplicar = (e) => {
        const newData = inputData + '*'
        setInputData(newData)
    }

    const sete = (e) => {
        const newData = inputData + '7'
        setInputData(newData)
    }

    const oito = (e) => {
        const newData = inputData + '8'
        setInputData(newData)
    }

    const nove = (e) => {
        const newData = inputData + '9'
        setInputData(newData)
    }

    const abrir = (e) => {
        const newData = inputData + '('
        setInputData(newData)
    }

    const quatro = (e) => {
        const newData = inputData + '4'
        setInputData(newData)
    }

    const cinco = (e) => {
        const newData = inputData + '5'
        setInputData(newData)
    }

    const seis = (e) => {
        const newData = inputData + '6'
        setInputData(newData)
    }

    const fechar = (e) => {
        const newData = inputData + ')'
        setInputData(newData)
    }

    const um = (e) => {
        const newData = inputData + '1'
        setInputData(newData)
    }

    const dois = (e) => {
        const newData = inputData + '2'
        setInputData(newData)
    }

    const tres = (e) => {
        const newData = inputData + '3'
        setInputData(newData)
    }

    const del = (e) => {
        const newData = inputData.substring(0, inputData.length - 1);
        setInputData(newData)
    }

    const ponto = (e) => {
        const newData = inputData + '.'
        setInputData(newData)
    }

    const zero = (e) => {
        const newData = inputData + '0'
        setInputData(newData)
    }

    const C = (e) => {
        setInputData('')
    }

    return (
        <>
            <Input inputData={inputData} setInputData={setInputData} />
            <div>
                <Tecla onClick={somar}>+</Tecla>
                <Tecla onClick={subtrair}>-</Tecla>
                <Tecla onClick={dividir}>/</Tecla>
                <Tecla onClick={multiplicar}>X</Tecla>
            </div>
            <div>
                <Tecla onClick={sete}>7</Tecla>
                <Tecla onClick={oito}>8</Tecla>
                <Tecla onClick={nove}>9</Tecla>
                <Tecla onClick={abrir}>(</Tecla>
            </div>
            <div>
                <Tecla onClick={quatro}>4</Tecla>
                <Tecla onClick={cinco}>5</Tecla>
                <Tecla onClick={seis}>6</Tecla>
                <Tecla onClick={fechar}>)</Tecla>
            </div>
            <div>
                <Tecla onClick={um}>1</Tecla>
                <Tecla onClick={dois}>2</Tecla>
                <Tecla onClick={tres}>3</Tecla>
                <Tecla onClick={del}>Del</Tecla>
            </div>
            <div>
                <Tecla onClick={ponto}>.</Tecla>
                <Tecla onClick={zero}>0</Tecla>
                <Tecla onClick={resultado}>=</Tecla>
                <Tecla onClick={C}>C</Tecla>
            </div>
        </>
    )
}

export default Teclado;