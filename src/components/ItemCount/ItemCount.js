import './ItemCount.css'
import Button from '@mui/material/Button';
import { useState} from 'react';
import { CardActions } from '@mui/material';
import Modal from '../Modal/Modal'


const ItemCount = ( {stock, onAdd }  ) => {
    
    const [open, setOpen] = useState(false)
    const handleClose = () => {
      setOpen(false)
    }
     
   const [count, setCount] = useState(1);
   const addCount = () =>{
    setCount(count + 1)
    
   }

const resCount = () =>{
    setCount(count - 1)
   }

        return (
               
       <div className='item-Count'>
            <CardActions >
                 <h5>SELECCIONE LA CANTIDAD</h5>
              <Button size="small" onClick={resCount} disabled={count === 0}>-</Button> 
                <p>{count}</p>
                <Button size="small" onClick={addCount} disabled={count >= stock}>+</Button>
                            
            </CardActions>
            <CardActions className='item-Count' >
                <Button variant='outlined' size="small" onClick={() => setOpen (true)}>Contacto</Button>
                <Button variant='outlined' onClick={() => {onAdd(count)}}>AGREGAR PRODUCTO</Button>
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


