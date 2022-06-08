import Item from '../Item/Item'
import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import productos from '../Data/ProductsMock';


const ItemListContainer = ({title}) => {
   
       
        const [products, setProducts] = useState([])
    
        const getItem = () => {
            return new Promise ( (resolve, reject) => {
                setTimeout(() => {
                    resolve (productos)
            }, 2000)
            })
    }
        useEffect( () => {
            
          getItem()
          .then( (res) => {
              setProducts(res)
       
        })
        .catch ( (err) => {
       
        })
        .finally ( () => {
       
        })
        },[])   
  

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