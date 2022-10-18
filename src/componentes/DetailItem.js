import react from 'react'
import React, { useEffect,useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Item from './Item';
import './Style/DetailItem.css'


function DetailItem(){
    const {id}= useParams()
    const [item, setItem] = useState([])
    
    useEffect(()=>{
            getProd() 
    },[])

    const getProd=()=>{
        const Url='https://fakestoreapi.com/products/'+ id
        fetch( Url )
        .then(response => {
            console.log(response)
            return response.json()
        })
        .then( data =>{
            setItem(data)
            console.log(data)

        })
        .catch(err =>{
            console.log(err)
        })
    }       
    return(
        <div className='detailItem'>
            <img className='card__img'
                src={ item.image }/>

                <h5> {item} </h5>

        </div>
        


    )
}
export default DetailItem;