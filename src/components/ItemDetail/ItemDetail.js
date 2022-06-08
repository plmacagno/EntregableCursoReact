import './ItemDetail.css'
import { useState} from 'react';
import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCount from '../ItemCount/ItemCount';



const ItemDetail = ({data}) => {
     const [cantidad, setCantidad] = useState (1)
     const [showButton, setShowButton] = useState (false)
    
     
     
    
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
                
                {!showButton ?
                 <ItemCount
                 cantidad={cantidad}
                 setShowButton={setShowButton}
                 actualizarCantidad={setCantidad} 
                          
                />
                :
                <Button variant='outlined'><Link to='/cart'>Ir al Carrito</Link></Button>}
              </CardContent> 
              
           </Card>     
        </div>
       
    )
}

export default ItemDetail