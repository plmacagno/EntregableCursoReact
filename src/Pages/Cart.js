import { useContext, useState } from 'react'
import '../../src/Pages/Cart.css'
import { Container, Button } from "@mui/material"
import { Delete } from "@mui/icons-material"  
import CartContext from '../context/CartContext'
import {Link} from 'react-router-dom';
import Modal from '../components/Modal/Modal'
import TextField from '@mui/material/TextField';
import { addDoc, collection } from 'firebase/firestore';
import db from '../components/Data/firebaseConfig';
import { useNavigate } from 'react-router-dom';

let date = new Date().toDateString();
console.log(date);

const Cart = () => {
    const { cart, totalPrice, deleteItem, clearCart} = useContext(CartContext)
    const [showModal, setShowModal] = useState(false);   
    const [formValue, setFormValue] = useState ({
        name:' ',
        phone:' ',
        email:' '
    })

    const [order, setOrder] = useState({
        buyer: {},
        items: cart.map( (items) => {
            return {
                id: items.id,
                title: items.titulo,
                price: items.precio,
                cantidad: items.cantidad
            }
        } ),
        total: totalPrice,
        fecha: date
    })

    const [sucess, setSuccess] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        setOrder({...order, buyer: formValue})
        saveData({...order, buyer: formValue})
    }
   
    const handleChange = (e) => {
        setFormValue({...formValue, [e.target.name]: e.target.value})
    }

    const endOrder = () => {
        
        navigate('/')
    }

    const saveData = async (newOrder) => {
        const orderFirebase = collection(db, 'ordenes')
        const orderDoc = await addDoc(orderFirebase, newOrder)
        setSuccess(orderDoc.id)
        clearCart()
      
    }

     if (cart.length !== 0){
         return (
            
        <Container className='container-general'>
       
        <h2 className='titulo'>CHECKOUT</h2>
        <div className="cart-section">
            <div className="col-cart-table_head">
                <h2>Producto</h2>
                <h2>Descripción</h2>
                <h2>Precio Unitario</h2>
                <h2>Cantidad</h2>
                <h2>Borrar Producto</h2>
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
                        <Button className="btn-delete" onClick={() =>{deleteItem(id)}}>
                           
                            <Delete />
                        </Button>
                        
                    </div>
                </div>

             )
        })}
            
            <div className="cart-footer">
                <Button className="btn-custom" ><Link to='/products/box'>Continuar comprando</Link></Button>
                <div className="cart-checkout-details" >
                    <div className="cart-checkout__subtotal">
                        <p>Subtotal</p>
                        <span>$ {totalPrice}</span>
                    </div>
                    <div className="cart-checkout__total">
                        <p>Total</p>
                        <span>$ {totalPrice}</span>
                    </div>
                    <Button className="btn-custom" onClick={() => setShowModal(true) }>Completar Compra</Button>
                </div>
            </div>
        </div>
            
        <Modal  title={sucess ? "COMPRA CONFIRMADA!" : "POR FAVOR CONFIRME SU COMPRA"} open={showModal} handleClose={() => setShowModal(false)}>
            {sucess ? (
                <div>
                    Su compra fue Confirmada!<br></br>
                    Número de Orden: {sucess}<br></br>
                    <Button variant='outlined' onClick={endOrder}>Aceptar</Button>
                </div>
            ) : (

                     
            <form className='form_contact' onSubmit={handleSubmit}>
                <TextField 
                    id="outlined-basic" 
                    name="name"
                    label="Nombre y Apellido"
                    variant="outlined"
                    value={formValue.name}
                    onChange={handleChange}
                />
                <TextField 
                    id="outlined-basic"
                    name="phone"
                    label="Teléfono"
                    variant="outlined" 
                    value={formValue.phone}
                    onChange={handleChange}
                />
                <TextField 
                    id="outlined-basic" 
                    name="email"
                    label="Mail" 
                    variant="outlined" 
                    value={formValue.email}
                    onChange={handleChange}
                />
                <Button type="submit">Enviar</Button> 
            </form>
         )} 
        </Modal>
        
        </Container>
        
       )}
          
  }

export default Cart
