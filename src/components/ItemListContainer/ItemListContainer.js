import Tarjeta from '../Card/Card'
import { Grid } from '@mui/material';
import { useState, useEffect } from 'react';
import productos from '../ItemList/ItemList'

const ItemListContainer = ({titu}) => {
   
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
        <h1> {titu} </h1>
            <Grid container spacing={1} >
                {
                    products.map( ({imagen, titulo, precio, stock, descr, id}) => {
                        return(
                            <Grid item md={3} key={id}>
                             <Tarjeta imagen={imagen} titulo={titulo} precio={precio} stock={stock} descr={descr} id={id}/>
                          </Grid>  
                                                           
                        )
                    })
                }
            </Grid>
        </>
 
    )
}

export default ItemListContainer