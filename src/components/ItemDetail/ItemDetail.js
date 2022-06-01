import './ItemDetail.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


const ItemDetail = ({data}) => {
  
      return (
      
        <div className='mas-info'>
            <h2>INFORMACION DETALLADA DEL PRODUCTO</h2>
            
            <Card sx={{ maxWidth: 880 }}>
            
                <CardMedia 
                  component="img"
                  height="500"
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
                </CardContent>  
                
            </Card>
              
        </div>
       
    )
}

export default ItemDetail