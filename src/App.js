import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';



function App(productos) {

  let styleCustom ={
    color : "green",
  
  }

  
  return (
    <div className="App" style={styleCustom} >
     
        <NavBar />
             
        <ItemListContainer title={'Nuestros Productos'} products={productos}/>
             
         <ItemDetailContainer />  
        
         
      
     </div>
  );
}

export default App;
