
import { Grid } from '@mui/material';
import Item from '../Item/Item';

const ItemList = ( {products, title} ) => {
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

export default ItemList