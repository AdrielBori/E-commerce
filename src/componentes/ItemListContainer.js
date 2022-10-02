import React from 'react'
import './Style/ItemListContainer.css';

function ItemListContainer(props){
    return(
        <main className='itemListContainer'>
            <h2>
                bienvenido.. {props.nombre} { props.apellido}
            </h2>
        </main>



    )
}
export default ItemListContainer;