import { useEffect, useState } from "react"
// import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
import productos from '../components/Data/ProductsMock';
import { useParams } from "react-router-dom"
import ItemList from "../components/ItemList/ItemList"

const ListProducts = () => {
     
   const [products, setProducts] = useState([])
   const { category } = useParams()

   
   let styleCustom ={
            color : "green",
   }  

   useEffect( () => {
      setProducts([])
      
      getProducts()
       .then ( (response) => {         
            filterCategory(response)
         })
         
   }, [category])  
   
   const getProducts = () => {
      return new Promise ( (resolve, reject) => {
            resolve (productos)
         })
      }

      const filterCategory = (array) => {
            return array.map( ( item ) => {
               if(item.category == category) {
                  return setProducts(products => [...products, item])
               }
            })

      }

         return (
             <div className="App" style={styleCustom} >
                 <ItemList title={'Productos Seleccionados por Categoria'} products={products}/>
             </div>    
         )

   
}
export default ListProducts