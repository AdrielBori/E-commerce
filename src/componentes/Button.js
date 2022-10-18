import React from 'react'
import './Style/Button.css'


function Button({texto, esBtnSuma,gestionClick}){
    return(
            <button className={ esBtnSuma ? 'btn-suma':'btn-menos' } onClick={gestionClick}>
                {texto}
            </button>
    )
}
export default Button;