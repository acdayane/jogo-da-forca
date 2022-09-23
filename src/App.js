import React from "react";

import "./css/reset.css";
import "./css/style.css";

import forca0 from "./assets/forca0.png";
// import forca1 from "./assets/forca1.png";
// import forca2 from "./assets/forca2.png";
// import forca3 from "./assets/forca3.png";
// import forca4 from "./assets/forca4.png";
// import forca5 from "./assets/forca5.png";
// import forca6 from "./assets/forca6.png";

import palavras from "./palavras.js";

const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let arrPalavra = []
let arrLetrasChutadas = []

export default function App() {

    const [palavraNaTela, setPalavraNaTela] = React.useState('')

    function iniciarJogo () { 
        
        arrLetrasChutadas = []
        const sorteada = Math.floor(Math.random() * palavras.length)
        let palavra = (palavras[sorteada]).toUpperCase()
        arrPalavra = palavra.split('')   
        console.log(arrPalavra)

        for (let i=0; i<arrPalavra.length; i++){            
            arrLetrasChutadas.push(' _ ')
        }

        setPalavraNaTela(arrLetrasChutadas)
                
        habilitarBotao()
    }

    const [disable, setDisable] = React.useState(true);

    function habilitarBotao () {
        setDisable(false)
    }

    function chutar () {
        
        //limpar o input
        //compara input com arrPalavra
    }


    return (
        <>
            <div className="root"> 
                <div className="conteudo">             
                    <img src = {forca0} />
                    <div className="inicio-jogo">
                        <button className="escolher-palavra" onClick={iniciarJogo}>Escolher palavra</button>   
                        <div className="palavra">
                            <p>{arrLetrasChutadas}</p>
                        </div>
                    </div>
                </div> 

                <div className="box-alfabeto">
                    {alfabeto.map((a, index) => (<button key={index} disabled={disable}>{a.toUpperCase()}</button>))}                    
                </div> 

                <div className="chutar-palavra">
                    <span>Já sei a palavra!</span>
                    <input disabled={disable}></input> 
                    <button onClick={chutar} disabled={disable}>Chutar</button>                  
                </div> 

            </div>            
        </>
    )
}