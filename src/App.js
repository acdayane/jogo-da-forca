import React, { useState } from "react";

import "./css/reset.css";
import "./css/style.css";

import forca0 from "./assets/forca0.png";
import forca1 from "./assets/forca1.png";
import forca2 from "./assets/forca2.png";
import forca3 from "./assets/forca3.png";
import forca4 from "./assets/forca4.png";
import forca5 from "./assets/forca5.png";
import forca6 from "./assets/forca6.png";

import palavras from "./palavras.js";

const imagens = [forca0, forca1, forca2, forca3, forca4, forca5, forca6]
const alfabeto = [{ letra: "a", status: true }, { letra: "b", status: true }, { letra: "c", status: true }, { letra: "d", status: true },
{ letra: "e", status: true }, { letra: "f", status: true }, { letra: "g", status: true }, { letra: "h", status: true },
{ letra: "i", status: true }, { letra: "j", status: true }, { letra: "k", status: true }, { letra: "l", status: true },
{ letra: "m", status: true }, { letra: "n", status: true }, { letra: "o", status: true }, { letra: "p", status: true },
{ letra: "q", status: true }, { letra: "r", status: true }, { letra: "s", status: true }, { letra: "t", status: true },
{ letra: "u", status: true }, { letra: "v", status: true }, { letra: "w", status: true }, { letra: "x", status: true },
{ letra: "y", status: true }, { letra: "z", status: true }]
let arrPalavra = []
let arrLetrasChutadas = []
let palavra = ""
let palavraAjustada = ""
let inputAjustado = ""
let contaErros = 0


export default function App() {

    const [forca, setForca] = useState(imagens[0])

    const [palavraNaTela, setPalavraNaTela] = useState('')

    //clique do botao escolher palavra

    function iniciarJogo() {

        contaErros = 0
        arrLetrasChutadas = []
        setForca(imagens[contaErros])
        setInput("")

        const sorteada = Math.floor(Math.random() * palavras.length)
        palavra = (palavras[sorteada]).toUpperCase()
        arrPalavra = palavra.split('')

        //console.log(arrPalavra)

        for (let i = 0; i < arrPalavra.length; i++) {
            arrLetrasChutadas.push(' _ ')
        }

        setPalavraNaTela(arrLetrasChutadas)

        habilitarBotao()

        ajustarLetras()
    }

    //habilitar e desabilitar botões

    const [disable, setDisable] = useState(true);

    function habilitarBotao() {
        for (let i = 0; i < alfabeto.length; i++) {
            alfabeto[i].status = false
        }
        setDisable(false)
    }

    function desabilitarBotao() {
        for (let i = 0; i < alfabeto.length; i++) {
            alfabeto[i].status = true
        }
        setDisable(true)
    }

    //ignorar acentos e caracteres especiais da palavra sorteada

    function ajustarLetras() {

        for (let j = 0; j < arrPalavra.length; j++) {
            if (arrPalavra[j] === 'Á' || arrPalavra[j] === 'À' || arrPalavra[j] === 'Â' || arrPalavra[j] === 'Ã') {
                arrPalavra[j] = 'A'
            }
            if (arrPalavra[j] === 'É' || arrPalavra[j] === 'Ê') {
                arrPalavra[j] = 'E'
            }
            if (arrPalavra[j] === 'Í') {
                arrPalavra[j] = 'I'
            }
            if (arrPalavra[j] === 'Ó' || arrPalavra[j] === 'Ô' || arrPalavra[j] === 'Õ') {
                arrPalavra[j] = 'O'
            }
            if (arrPalavra[j] === 'Ú') {
                arrPalavra[j] = 'U'
            }
            if (arrPalavra[j] === 'Ç') {
                arrPalavra[j] = 'C'
            }
        }
    }

    //clicar em cada letra, renderizar acertos e erros, chamar funções de finalizar jogo

    function escolherLetra(letra, i) {
        if (arrPalavra.includes(letra.toUpperCase())) {

            for (let j = 0; j < arrPalavra.length; j++) {

                if (letra.toUpperCase() === arrPalavra[j]) {
                    arrLetrasChutadas[j] = letra.toUpperCase()
                    arrLetrasChutadas = [...arrLetrasChutadas]
                    setPalavraNaTela(arrLetrasChutadas)

                    if (arrLetrasChutadas.includes(' _ ') === false) {
                        ganharJogo()
                    }
                }
            }
        }
        else {

            if (contaErros < 6) {
                contaErros = contaErros + 1
                setForca(imagens[contaErros])
            }

            if (contaErros === 6) {
                perderJogo()
            }
        }
        alfabeto[i].status = true
    }

    //ignorar acentos e caracteres especiais do input e finalizar jogo

    const [input, setInput] = useState("")

    function chutar() {

        palavraAjustada = arrPalavra.toString()
        for (let j = 0; j < arrPalavra.length; j++) {
            palavraAjustada = palavraAjustada.replace(',', '')
        }

        inputAjustado = input.toUpperCase()
        inputAjustado = inputAjustado.replace('Á', 'A')
        inputAjustado = inputAjustado.replace('À', 'A')
        inputAjustado = inputAjustado.replace('Ã', 'A')
        inputAjustado = inputAjustado.replace('Â', 'A')
        inputAjustado = inputAjustado.replace('É', 'E')
        inputAjustado = inputAjustado.replace('Ê', 'E')
        inputAjustado = inputAjustado.replace('Í', 'I')
        inputAjustado = inputAjustado.replace('Ó', 'O')
        inputAjustado = inputAjustado.replace('Ô', 'O')
        inputAjustado = inputAjustado.replace('Õ', 'O')
        inputAjustado = inputAjustado.replace('Ú', 'U')
        inputAjustado = inputAjustado.replace('Ç', 'C')

        if (inputAjustado === palavraAjustada) {
            ganharJogo()
        }
        else {
            perderJogo()
        }
    }

    // finalização do jogo

    function ganharJogo() {

        desabilitarBotao()
        setPalavraNaTela(<div className="verde"> {palavra} </div>)
        alert('Parabéns! Clique em escolher palavra para jogar novamente.')

    }

    function perderJogo() {

        desabilitarBotao()
        setPalavraNaTela(<div className="vermelho"> {palavra} </div>)
        setForca(imagens[6])
        alert('Não foi dessa vez! Clique em escolher palavra para tentar novamente.')

    }


    return (
        <>
            <div className="root">

                <div className="conteudo" >
                    <img src={forca} alt={forca} />
                    <div className="inicio-jogo">
                        <button className="escolher-palavra" data-identifier="choose-word" onClick={iniciarJogo}>Escolher palavra</button>
                        <div className="palavra">
                            <div>{palavraNaTela}</div>
                        </div>
                    </div>
                </div>

                <ul className="box-alfabeto">
                    {alfabeto.map((letras, index) => (
                        <li key={index} onClick={() => escolherLetra(letras.letra, index)} >
                            <button disabled={letras.status} >{letras.letra.toUpperCase()}</button>
                        </li>))}
                </ul>

                <div className="chutar-palavra">
                    <span>Já sei a palavra!</span>
                    <input value={input} onChange={(e) => setInput(e.target.value)} disabled={disable}></input>
                    <button data-identifier="guess-button" onClick={chutar} disabled={disable}>Chutar</button>
                </div>

            </div>
        </>
    )
}
