import { useContext } from 'react'
import '../../src/Pages/Cart.css'
import { Container, Button } from "@mui/material"
import { Delete } from "@mui/icons-material"  
import CartContext from '../context/CartContext'
import {Link} from 'react-router-dom';


const Cart = () => {
   const { cart, totalPrice, deleteItem} = useContext(CartContext)
        console.log("Cart desde Checkout: ", cart)
   
    return (
        
        <Container className='container-general'>
        <h2 className='titulo'>CHECKOUT</h2>
        <div className="cart-section">
            <div className="col-cart-table_head">
                <h2>Producto</h2>
                <h2>Descripción</h2>
                <h2>Precio Unitario</h2>
                <h2>Cantidad</h2>
                <h2>Quitar</h2>
            </div>
            {cart.map( (item)  => {
                const {titulo, imagen, precio, id, cantidad} = item
                 return(
                
                <div className="cart-table__content" key={id}>
                    <div className="cart-table__content-img">
                        <img src={`/${imagen}`} />
                    </div>
                    <div className="cart-table__content-title">
                        <p>{titulo}</p>
                    </div>
                    <div className="cart-table__content-price">
                        <p>$ {precio}</p>
                    </div>
                    <div className="cart-table__content-quantity">
                        <p>{cantidad}</p>
                    </div>
                    <div className="cart-table__content-btn">
                        <button className="btn-delete" onClick={() =>{deleteItem(id)}}>
                           
                            <Delete />
                        </button>
                        
                    </div>
                </div>

             )
        })}

            <div className="cart-footer">
                <Button className="btn-custom" ><Link to='/products/box'>Continuar comprando</Link></Button>
                
                <div className="cart-checkout-details">
                    <div className="cart-checkout__subtotal">
                        <p>Subtotal</p>
                        <span>$ {totalPrice}</span>
                    </div>
                    <div className="cart-checkout__total">
                        <p>Total</p>
                        <span>$ {totalPrice}</span>
                    </div>
                    <Button className="btn-custom">Completar Compra</Button>
                </div>
            </div>
        </div>
        </Container>
    )
}

export default Cart
