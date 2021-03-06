import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom';

  const Item = ({ imagen, titulo, precio, stock, id }  ) => {
        
 
        return ( 
         
          
        <div>   
             <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                  <CardMedia
                    component="img"
                    height="300"
                    image={`/${imagen}`}
                    alt="Imagen Producto"
                  />
                   <Button variant={'outlined'} className="card-btn-details">
                    <Link to={'/product/' + id}>Ver Detalle</Link>
                   </Button>
                   
                 </CardContent>
                 <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {titulo}
                    </Typography>
                    <Typography variant="body2" >
                      Precio $ {precio}
                    </Typography>
   
                 </CardContent>  
              </Card>
            </div>
           
         )
  }

export default Item          
