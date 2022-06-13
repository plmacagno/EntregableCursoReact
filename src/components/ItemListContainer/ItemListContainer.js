import Item from '../Item/Item'
import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
// import productos from '../Data/ProductsMock';
import { collection, getDocs } from "firebase/firestore";
import db from '../Data/firebaseConfig';


const ItemListContainer = ({title}) => {
   
       
    const [products, setProducts] = useState([])
    
  /*}         const getItem = () => {
            return new Promise ( (resolve, reject) => {
                setTimeout(() => {
                    resolve (productos)
            }, 2000)
            })
    }

        
        useEffect( () => {
          getProducts()
          getItem()
          .then( (res) => {
              setProducts(res)
       
        })
        .catch ( (err) => {
       
        })
        .finally ( () => {
       
        })
        },[])   
    */ 

     useEffect( () => {
        setProducts([])
        getProducts()
       
        .then( (productos) => {
            setProducts(productos)
     
      })
    },[])
    
        const getProducts = async  () => {
            const productSnapshot = await getDocs(collection(db, "productos"));
            const productList = productSnapshot.docs.map((doc) => {
                let product =doc.data()
                product.id = doc.id
                return product
            })
            return productList
        }
    
    return (
        <>
        <h1> {title} </h1>
            <Grid container spacing={1} >
                {
                    products.map( ({imagen, titulo, category, precio, stock, descr, id}) => {
                        return(
                            <Grid item md={4} key={id}>
                             <Item 
                                imagen={imagen} 
                                titulo={titulo} 
                                category={category}
                                precio={precio}
                                stock={stock} 
                                descr={descr}
                                id={id}
                            />
                          </Grid>  
                                                           
                        )
                    })
                }
            </Grid>
        </>
 
    )
}

export default ItemListContainer