import './ItemCount.css'
import Button from '@mui/material/Button';
import { useState} from 'react';
import { CardActions } from '@mui/material';
import Modal from '../Modal/Modal'


const ItemCount = ( {stock, cantidad, actualizarCantidad, setShowButton}  ) => {
    
    const [open, setOpen] = useState(false)
    const handleClose = () => {
      setOpen(false)
    }
     
    const addProduct = () => {
       actualizarCantidad(cantidad + 1)
    } 

    const resProduct = () => {
        actualizarCantidad(cantidad - 1)
    }

        return (
               
       <div className='item-Count'>
            <CardActions >
                 <h5>SELECCIONE LA CANTIDAD</h5>
              <Button size="small" onClick={resProduct} disabled={cantidad === 0}>-</Button> 
                <p>{cantidad}</p>
                <Button size="small" onClick={addProduct} disabled={cantidad >= stock}>+</Button>
                            
            </CardActions>
            <CardActions className='item-Count' >
                <Button variant='outlined' size="small" onClick={() => setOpen (true)}>Contacto</Button>
                <Button variant='outlined' onClick={() => setShowButton(true)}>AGREGAR PRODUCTO</Button>
            </CardActions>

            <Modal handleClose={handleClose} open={open}>
                    <h2>Ingrese los datos solicitados</h2>
                    <form>
                        <input type={'text'} placeholder={'Nombre y Apellido'}/>
                        <input type={'email'} placeholder={'Mail'}/>
                        <button>Enviar</button>
                    </form> 
            </Modal>
              

                
        </div>
       
    );
}   

export default ItemCount


