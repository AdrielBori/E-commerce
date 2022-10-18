import React from 'react'
import { BrowserRouter, Routes , Route, json } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './Style/ItemDetailContainer.css';
import { useState, useEffect } from 'react';

const ItemDetailContainer = () => {
    const productID=useParams()
    const [item, setItem] = useState([])
    const URL_VAR=`https://fakestoreapi.com/products/${productID.id}`
    console.log(URL_VAR)

    useEffect(()=>{
      setTimeout(()=>{
          getProducts() 
      },1000)
      
    },[productID])
    const getProducts=()=>{
        fetch(URL_VAR )
        .then(response => {
            return response.json()
        })
        .then( data =>{
            setItem(data)
        })
        .catch(err =>{
        })
    }    

  return (
    <div className='itemDetalContainer'>
      <img className='imgDetailItem'
                src={ item.image }
                />
      <div className='divDetailText'>
                  <h4 className='titleDetailItem'>
                    {item.title}
                  </h4>
                  <span className='priceItem'>
                  precio: ${item.price}
                  </span>
                  <p className='descripItem'>{item.description}</p>
      </div>



    </div>
  )
}

export default ItemDetailContainer