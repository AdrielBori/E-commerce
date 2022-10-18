import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';
import './Style/Navbar.css'


const categorias=[
  {nombre:"electronics", id:'0', ruta:"/categoria/electronics"},
  {nombre:"jewelery", id:'1', ruta:"/categoria/jewelery"},
  {nombre:"men's clothing", id:'2', ruta:"/categoria/men's clothing"},
  {nombre:"women's clothing", id:'3', ruta:"/categoria/women's clothing"}]

function Navbar(){
    return(
        <header className='navbar'>
            <div    className='logo'>
              <Link to='/'>
                <img
                  className='logo__img'
                  src={require ('../assets/logo.png')}
                />
              </Link>
            </div>
            <h1>MARKET CLOTHING </h1> 
            <nav>
                {categorias.map((categoria)=>{
                  return(
                    <NavLink key={categoria.id}
                      to={categoria.ruta}
                      >
                      {categoria.nombre}
                      
                    </NavLink>
                  )
                })}
              </nav>
            <CartWidget/>
        </header>




    )
}
export default Navbar;