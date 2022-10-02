import logo from './logo.svg';
import './App.css';
import Navbar from './componentes/Navbar';
import Footer from './componentes/Footer';
import ItemListContainer from './componentes/ItemListContainer';

  const User= prompt("cual es tu nombre")
  const SurNuser= prompt("cual es tu apellido")

function App() {
  return (
    <div className="App">
        <Navbar/>
        <ItemListContainer
        nombre={User}
        apellido={SurNuser}
        />
        <Footer/>
    </div>
  );
}

export default App;
