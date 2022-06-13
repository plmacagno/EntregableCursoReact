import { useEffect, useState } from "react"
import productos from '../components/Data/ProductsMock';
import { useParams } from "react-router-dom";
import ItemList from "../components/ItemList/ItemList";

import { collection, getDocs } from "firebase/firestore";
import db from "../components/Data/firebaseConfig";

const ListProducts = () => {
     
   const [products, setProducts] = useState([])
   const { category } = useParams()

   
   let styleCustom ={
            color : "green",
   }  
  
   useEffect( () => {
      getProducts().then ( (response) => {   
         setProducts(response);    
           });
         
   }, [category]);
   
   const getProducts = () => {
      return new Promise ( (resolve, reject) => {
         if(category) {
              resolve (productos.filter(prod => prod.category === category))
         }
        resolve(productos);
      });
   };

   
         return (
             <div className="App" style={styleCustom} >
                 <ItemList title={'Productos Seleccionados por Categoria'} products={products}/>
             </div>    
         )

   
}
export default ListProducts