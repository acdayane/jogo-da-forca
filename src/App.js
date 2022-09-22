import ReactDOM from "react-dom";

import "./css/reset.css";
import "./css/style.css";

import forca0 from "./assets/forca0.png";
import forca1 from "./assets/forca1.png";
import forca2 from "./assets/forca2.png";
import forca3 from "./assets/forca3.png";
import forca4 from "./assets/forca4.png";
import forca5 from "./assets/forca5.png";
import forca6 from "./assets/forca6.png";

import palavras from "./palavras";

const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

export default function App() {
    return (
        <>
            <div className="root"> 
                <div className="conteudo">             
                    <img src = {forca0} />
                    <button>Escolher palavra</button>   
                </div> 

                <div className="box-alfabeto">
                    {alfabeto.map((a) => (<button>{a.toUpperCase()}</button>))}                    
                </div> 

                <div className="chutar-palavra">
                    <span>Já sei a palavra!</span>
                    <input></input> 
                    <button>Chutar</button>                  
                </div> 

            </div>            
        </>
    )
}