
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCount from '../ItemCount/ItemCount'


    const Tarjeta = ({imagen, titulo, precio, stock, descr, id, count}) => {
     

             return ( 
              <Card sx={{ maxWidth: 345 }}>
                <div className="cardVarias"> 
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
                    Stock actual : {stock-count}
                    </Typography>
                  </CardContent>
                  <ItemCount />
          
                </div>
               </Card>
            );
        }

export default Tarjeta          
