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
            <ol className='menu'>
              <li><a href=''>INICIO</a></li>
              <li><a href=''>ANIME</a></li>
              <li><a href=''>PELICULAS</a></li>
              <li><a href=''>JUGUETES</a></li>
              <li><a href=''>UTILIDAD</a></li>
            </ol>
            <CartWidget/>
        </header>




    )
}
export default Navbar;