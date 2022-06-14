import './App.css';
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from  '../src/Pages/Inicio'
import ListProducts from './Pages/ListProducts'
import Nosotros from '../src/Pages/Nosotros'
import Contacto from '../src/Pages/Contacto'
import Detalle from './Pages/Detalle';
import { CartProvider} from './context/CartContext';
import Cart from './Pages/Cart';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {

 
  
  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path='/' element={<Inicio />} />
            <Route exact path='/Cart' element={<Cart />} />
            <Route exact path='/Nosotros' element={<Nosotros />} />
            <Route exact path='/Contacto' element={<Contacto />} /> 
            <Route exact path='/product/:id' element={<Detalle />} /> 
            <Route exact path='/products/:category' element={<ItemListContainer />} /> 
            <Route exact path='*' element={<h1> Error 404 - Pagina no encontrada</h1>} /> 
          </Routes>
        </BrowserRouter>
      </CartProvider> 
    </div>  
    );
}

export default App;
