import './ItemCount.css'
import Button from '@mui/material/Button';
import { useState} from 'react';
import { CardActions } from '@mui/material';



const ItemCount = ( {stock, onAdd }  ) => {
    
  
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
                <Button variant='outlined' onClick={() => {onAdd(count)}}>AGREGAR PRODUCTO</Button>
            </CardActions>

               
        </div>
       
    );
}   

export default ItemCount


