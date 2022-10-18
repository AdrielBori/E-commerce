import React from 'react'
import './Style/ItemList.css'
import Item from './Item';
import { prettyDOM } from '@testing-library/react';



function ItemList(props){
    const productos=[ ...props.productos ]
    
return(
    <div className='itemList '>
        {
        productos.map((prod)=>{
                
                   return(
                    <Item key={ prod.id }
                        name={ prod.title } 
                        price={ prod.price }
                        image={ prod.image }
                        descrip={ prod.description }
                        id={prod.id}
                    />
                )
            })

        }



    </div>

    
)


}
export default ItemList;