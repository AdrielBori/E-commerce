import React, { useEffect,useState } from 'react'
import { BrowserRouter, Routes , Route, json } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import './Style/ItemListContainer.css';



function ItemListContainer(props){
    const captureID=useParams()
    const [items, setItems] = useState([])
    console.log(captureID)

    const URL_BASE='https://fakestoreapi.com/products/'
    const URL_VAR=`${URL_BASE}category/${captureID.id}`
    
    captureID.id===undefined ? URL=URL_BASE : URL=URL_VAR

    useEffect(()=>{
        setTimeout(()=>{
            getProducts() 
        },1000)
        
    },[captureID])
    const getProducts=()=>{
        const Url='https://fakestoreapi.com/products/'
        fetch(URL )
        .then(response => {
            return response.json()
        })
        .then( data =>{
            setItems(data)
        })
        .catch(err =>{
        })
    }    

    
    return(
                <main className='itemListContainer'>
                        <h2>
                            bienvenido.. { props.nombre } { props.apellido}
                        </h2>  
                        {<ItemList
                        productos={ items }
                        />}
                </main>
    )
}
export default ItemListContainer;