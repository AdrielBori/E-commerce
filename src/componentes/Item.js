import React from 'react'
import './Style/Item.css'
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';


function Item({ name, id , image , price , descrip }){
        console.log(id)
        return(
        
            <Link to={`/producto/${id}`} className='item ' id={id}>
                <img className='card__img'
                src={ image }
                />
                <div className='card__text'>
                    <h4 className='card__titulo'>{ name }</h4>
                    
                    <span>${ price }</span>
                </div>
            </Link>
    )
}
export default Item;