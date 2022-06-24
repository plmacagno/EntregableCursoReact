import './CartWidget.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Menu } from '@mui/material';
import { useContext, useState } from 'react';
import CartContext from '../../context/CartContext';
import CardMedia from '@mui/material/CardMedia';



const CartWidget = () => {
    
    const { cart, } = useContext(CartContext)
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
    
     <div >
         <ShoppingCartIcon
            className='boton'
            color={'pallete.info.dark'}
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            />
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
                'aria-labelledby' : 'basic-button',
            }}
            >
            <div className='container-item-list-cart'>
              {cart.length === 0 && (<p>El Carrito  está vacío</p>) }
              {cart.map( (item) => {
                    return(
                    <div className='item-cart-prod' key={item.id}>
                             <div className='cart-prod__info'>
                                <p>{item.titulo} </p>
                                <span>Precio $ {item.precio}</span><br></br>
                                <span>Stock actual: {item.stock-item.cantidad}</span><br></br>
                                <span>Se agregaron {item.cantidad} Productos</span>
                            </div >   
                         <div>
                             <CardMedia
                                component="img"
                                height="150"
                                image={`/${item.imagen}`}
                                alt="Imagen Producto"
                            />
                        
                            
                         </div>
                        
                    </div>
                    )
                })}  
                
                   
            </div>            
        </Menu>    
    </div>       
          
        )
    }
    
    export default CartWidget
