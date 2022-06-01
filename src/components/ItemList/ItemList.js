
import { Grid } from '@mui/material';
import Item from '../Item/Item';

const ItemList = ( {products} ) => {
    return (
        <Grid container spacing={1} >
        {
            products.map( ({imagen, titulo, precio, stock, descr, id}) => {
                return(
                    <Grid item md={4} key={products.id}>
                     <Item 
                        imagen={imagen} 
                        titulo={titulo} 
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
       
 
    )
}

export default ItemList