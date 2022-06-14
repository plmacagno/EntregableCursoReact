import Item from '../Item/Item'
import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
// import productos from '../Data/ProductsMock';
import { collection, getDocs, query, where } from "firebase/firestore";
import db from '../Data/firebaseConfig';
import { useParams } from 'react-router-dom';


const ItemListContainer = ({title}) => {
   
       
    const [products, setProducts] = useState([])
    const {category} = useParams();
    
 
        const getProducts = async  () => {
            const refDin = category
            ? query(collection(db, "productos"), where("category", "==", category))
            : collection(db, "productos");
        
            const productSnapshot = await getDocs(refDin);
            const productList = productSnapshot.docs.map((doc) => {
                let product =doc.data()
                product.id = doc.id
                return product   
            });
            return productList
        };
        useEffect( () => {
            setProducts([])
            getProducts()           
            .then( (productos) => {
                setProducts(productos);
         
          });
        },[category]);

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