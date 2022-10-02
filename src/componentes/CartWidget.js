import React from 'react'
import './Style/CartWidget.css'


function CartWidget(){
    return(
            <div className='carrito dFlexCtr'>
                <img
                className='carrito__icon'
                src={require ('../assets/carrito.png')}
            />
            </div>
                




    )
}
export default CartWidget;