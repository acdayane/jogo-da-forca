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
const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let arrPalavra = []
let arrLetrasChutadas = []
let palavra = ""
let palavraAjustada = ""
let inputAjustado = ""

export default function App() {

    const [forca, setForca] = useState(imagens[0])

    const [palavraNaTela, setPalavraNaTela] = useState('')

    function iniciarJogo () { 

        setInput("")        
        arrLetrasChutadas = []
        const sorteada = Math.floor(Math.random() * palavras.length)
        palavra = (palavras[sorteada]).toUpperCase()
        arrPalavra = palavra.split('')   
        console.log(arrPalavra)

        for (let i=0; i<arrPalavra.length; i++){            
            arrLetrasChutadas.push(' _ ')
        }

        setPalavraNaTela(arrLetrasChutadas)
                
        habilitarBotao()
    }

    const [disable, setDisable] = useState(true);

    function habilitarBotao () {
        setDisable(false)
    }

    function desabilitarBotao () {
        setDisable(true)
    }

    function ajustarLetras () {
        
        palavraAjustada = palavra.replace('Á','A')
        palavraAjustada = palavraAjustada.replace('À','A')
        palavraAjustada = palavraAjustada.replace('Ã','A')
        palavraAjustada = palavraAjustada.replace('Â','A')
        palavraAjustada = palavraAjustada.replace('É','E')
        palavraAjustada = palavraAjustada.replace('Ê','E')
        palavraAjustada = palavraAjustada.replace('Í','I')
        palavraAjustada = palavraAjustada.replace('Ó','O')
        palavraAjustada = palavraAjustada.replace('Ô','O')
        palavraAjustada = palavraAjustada.replace('Ú','U')
        palavraAjustada = palavraAjustada.replace('Ç','C')

        inputAjustado = input.replace('À','A')
        inputAjustado = inputAjustado.replace('À','A')
        inputAjustado = inputAjustado.replace('Ã','A')
        inputAjustado = inputAjustado.replace('Â','A')
        inputAjustado = inputAjustado.replace('É','E')
        inputAjustado = inputAjustado.replace('Ê','E')
        inputAjustado = inputAjustado.replace('Í','I')
        inputAjustado = inputAjustado.replace('Ó','O')
        inputAjustado = inputAjustado.replace('Ô','O')
        inputAjustado = inputAjustado.replace('Ú','U')
        inputAjustado = inputAjustado.replace('Ç','C')

        chutar()

    }

    const [input, setInput] = useState("")

    function chutar () {

        desabilitarBotao()

        if (inputAjustado.toUpperCase() === palavraAjustada) {
            setPalavraNaTela(<div className = "verde"> {palavra} </div>)            
            alert('Parabéns! Clique em escolher palavra para jogar novamente.')
        }
        else{            
            setPalavraNaTela(<div className = "vermelho"> {palavra} </div>)   
            setForca(imagens[6])
            alert('Não foi dessa vez! Clique em escolher palavra para tentar novamente.')
        } 

    }

    return (
        <>
            <div className="root"> 
            
                <div className="conteudo">             
                    <img src = {forca} alt = {forca} />
                    <div className="inicio-jogo">
                        <button className="escolher-palavra" data-identifier="choose-word" onClick={iniciarJogo}>Escolher palavra</button>   
                        <div className="palavra"> 
                            <div>{palavraNaTela}</div>
                        </div>
                    </div>
                </div> 

                <div className="box-alfabeto">
                    {alfabeto.map((a, index) => (<button key={index} disabled={disable}>{a.toUpperCase()}</button>))}                    
                </div> 

                <div className="chutar-palavra">
                    <span>Já sei a palavra!</span>
                    <input value={input} onChange={(e) => setInput(e.target.value)} disabled={disable}></input> 
                    <button data-identifier="guess-button" onClick={ajustarLetras} disabled={disable}>Chutar</button>                  
                </div> 

            </div>            
        </>
    )
}