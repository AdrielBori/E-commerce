import logo from './logo.svg';
import './App.css';
import Navbar from './componentes/Navbar';
import Footer from './componentes/Footer';
import ItemListContainer from './componentes/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './componentes/ItemDetailContainer';

  const User= prompt("cual es tu nombre")
  const SurNuser= prompt("cual es tu apellido")

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route  path={'/'} element={<ItemListContainer nombre={User} apellido={SurNuser}/> }   />
          <Route  path={'/categoria/:id'}  element={<ItemListContainer nombre={User} apellido={SurNuser}/>}  />
          <Route  path={'/producto/:id'} element={<ItemDetailContainer />}/>
          <Route  path={'*'} element={<ItemListContainer nombre={User} apellido={SurNuser}/> }   />

        </Routes>
    </BrowserRouter>
    <Footer/>
    
    </>
  );
}

export default App;
