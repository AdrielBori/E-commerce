import React from 'react'
import CartWidget from './CartWidget';
import './Style/Navbar.css'


function Navbar(){
    return(
        <header className='navbar'>
            <div    className='logo'>
              <img
                className='logo__img'
                src={require ('../assets/logo.png')}
              />
            </div>
            <h1>
                IMPRESIONES 3D
            </h1>
            <CartWidget/>
        </header>




    )
}
export default Navbar;