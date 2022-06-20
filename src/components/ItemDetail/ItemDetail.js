import './ItemDetail.css'
import {Link} from 'react-router-dom';
import { useState} from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCount from '../ItemCount/ItemCount';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';



const ItemDetail = ({data}) => {

    const { addToCart, isInCart, deleteItem } = useContext(CartContext)
    const [showButton, setShowButton] = useState (false)

    const sendItemToCart = (qty) => {
      addToCart({...data, cantidad: qty})
    }
    
    
     
    
     return (
      
        <div className='mas-info'>
            <h2>INFORMACION DETALLADA DEL PRODUCTO</h2>
            
          

            <Card sx={{ maxWidth: 880 }}>
            
                <CardMedia 
                  component="img"
                  height="300"
                  image={`/${data.imagen}`}
                  alt="Imagen Producto" 
                >  
                </CardMedia>
                <CardContent className="info-baja">
                  <Typography gutterBottom variant="h6" component="div">
                    {data.titulo}
                  </Typography>
                  <Typography variant="body2">
                    {data.descr}
                  </Typography>
                
                
                {isInCart(data.id) ? (<Button variant='outlined' onClick={() => {deleteItem(data.id)}}>Borrar Producto</Button>) : 
                  (<ItemCount
                  stock={data.stock}
                  price={data.precio}
                  onAdd={sendItemToCart}
                  cantidad={data.qty}
                  />
                  )}

                
                <Button variant='outlined'><Link to='/cart'>Ir al Carrito</Link></Button>
                
              
              </CardContent> 
              
           </Card>     
        </div>
       
    )
}

export default ItemDetail
