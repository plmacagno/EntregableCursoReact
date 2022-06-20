import '../Pages/Contacto.css'
import { useState } from 'react';
import { Button } from "@mui/material"
import TextField from '@mui/material/TextField';
import { addDoc, collection } from 'firebase/firestore';
import db from '../components/Data/firebaseConfig';
import { useNavigate } from 'react-router-dom';
import Modal from '../../src/components/Modal/Modal'


const Contacto = () => {

    const [open, setOpen] = useState(false)
    const handleClose = () => {
      setOpen(false)
    }

   const navigate = useNavigate()
   const [formContact, setFormContact] = useState ({
      name:' ',
      phone:' ',
      email:' ',
      msg:' '

  })

  const handleChange = (e) => {
   setFormContact({...formContact, [e.target.name]: e.target.value})
}

const saveData = async (newContact) => {
   const contactFirebase = collection(db, 'contacto')
    await addDoc(contactFirebase, newContact)
 
 
}

const handleSubmit = (e) => {
   e.preventDefault()
   saveData({contacto: formContact})
}

const endContact = () => {
        
   navigate('/')
}

     return(
      <>
      
      <h2>  Formulario de Contacto</h2>

      <form className='form_contacto' onSubmit={handleSubmit}>
       
                <TextField 
                    id="outlined-basic" 
                    name="name"
                    label="Nombre y Apellido"
                    variant="outlined"
                    value={formContact.name}
                    onChange={handleChange}
                />
                <TextField 
                    id="outlined-basic"
                    name="phone"
                    label="Teléfono"
                    variant="outlined" 
                    value={formContact.phone}
                    onChange={handleChange}
                />
                <TextField 
                    id="outlined-basic" 
                    name="email"
                    label="Email" 
                    variant="outlined" 
                    value={formContact.email}
                    onChange={handleChange}
                />
                  <TextField 
                    id="outlined-basic" 
                    name="msg"
                    label="Mensaje" 
                    variant="outlined" 
                    value={formContact.msg}
                    onChange={handleChange}
                />
                
                <Button type="submit">Enviar</Button> <br></br>
                <Button type="Submit" variant="outlined" onClick={endContact}>Volver a Inicio</Button>
            
            </form>
            
          </>  
     )


}

export default Contacto