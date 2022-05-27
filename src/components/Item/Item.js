
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCount from '../ItemCount/ItemCount'

  
  const Item = ( { imagen, titulo, precio, stock } ) => {
    
      
      const onAdd = (cantidad) => {
       alert ('Compraste' + ' ' + cantidad + ' ' + 'Productos')

    } 
          return ( 
          <div>        
              <Card sx={{ maxWidth: 345 }}>
               
                  <CardMedia
                    component="img"
                    height="300"
                    image={imagen}
                    alt="Imagen Producto"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {titulo}
                    </Typography>
                    <Typography variant="body2" >
                      Precio $ {precio}
                    </Typography>
                    <Typography variant="body2" >
                    Stock actual : {stock}
                    </Typography>
                  </CardContent>
                  <ItemCount stock={ stock } onAdd={ onAdd } />
                         
               </Card>
            </div>
         );
  }

export default Item          
