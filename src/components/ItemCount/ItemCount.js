import './ItemCount.css'
import Button from '@mui/material/Button';
import { useState , } from 'react';
import { CardActions } from '@mui/material';
import {Modal, Modal2} from '../Modal/Modal'


const ItemCount = (imagen, titulo, precio, stock) => {

    const [open, setOpen] = useState(false)
    const handleClose = () => {
      setOpen(false)
    }

    const [open2, setOpen2] = useState(false)
    const handleClose2 = () => {
      setOpen2(false)
    }

    const [count, setCount] =useState(1);
    const addCount = () => {
        setCount(count + 1)
    } 

    const resCount = () => {
        setCount(count - 1)
    }

       return (
               
       <div>
            <CardActions className='item-Count'>
            
                <Button size="small" onClick={resCount} disabled={count === 0}>-</Button>
                <p>{count}</p>
                <Button size="small" onClick={addCount} disabled={count >= stock}>+</Button>
                            
            </CardActions>
            <CardActions className='item-Count' >

                <Button size="small" onClick={() => setOpen2 (true)}>Compra</Button>
                <Button size="small" onClick={() => setOpen (true)}>Contacto</Button>
            </CardActions>

            <Modal handleClose={handleClose} open={open}>
                    <h2>Ingrese los datos solicitados</h2>
                    <form>
                        <input type={'text'} placeholder={'Nombre y Apellido'}/>
                        <input type={'email'} placeholder={'Mail'}/>
                        <button>Enviar</button>
                    </form> 
            </Modal>
            <Modal2 handleClose={handleClose2} open={open2}>
                    <h4>Su compra de {count} {titulo} fue confirmada!</h4> 
                     <h4> Gracias por su compra!</h4>
                        
            </Modal2>
                
        </div>
       
    );
}   

export default ItemCount


