import './ItemDetail.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const ItemDetail = ({data}) => {
    return (
        <div>
            Informacion del producto
           
            <Card sx={{ maxWidth: 880 }}>
                <div className="cardProducto" > 
                <CardMedia 
                  component="img"
                  height="900"
                  image={data.imagen}
                  alt="Imagen Producto"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {data.titulo}
                  </Typography>
                  <Typography variant="body2">
                    {data.descr}
                  </Typography>
                </CardContent>  
                </div>
            </Card>
              
        </div>
    )
}

export default ItemDetail