import React from 'react'
import Button from './Button';
import './Style/ItemCount.css'
import {useState} from 'react'


function ItemCount(stock){
    const reserv= JSON.parse(stock.stock)
    console.log(reserv)
    const [cantidad,setCantidad]=useState(0)
    const sumarClick=()=>{
        cantidad == reserv ? alert("no hay mas stock") : setCantidad(cantidad + 1);
    }
    const restarClick=()=>{
        if(cantidad==0){
            alert("no hay mas bajo")
        }else{
            setCantidad(cantidad - 1); 
        }
        
    }
    return(
            <div className='itemCount dFlexCtr'>
                <Button
                    texto='-'
                    esBtnSuma={false}
                    gestionClick={restarClick}
                    />
                <div>
                    {cantidad}
                </div>


                <Button
                    texto='+'
                    esBtnSuma={true}
                    gestionClick={sumarClick}
                    />
            </div>
                




    )
}
export default ItemCount;