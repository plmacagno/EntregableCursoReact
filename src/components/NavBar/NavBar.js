import './NavBar.css';
import Button from '@mui/material/Button';
import { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Carro from '../CartWidget/CartWidget';

const NavBar = () => {
      const [anchorEl, setAnchorEl] = useState(null);
   const open = Boolean(anchorEl);
   const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
   };
   const handleClose = () => {
      setAnchorEl(null);
   };

   const categorias = ["box" , "individual"]

    return (
        
        <AppBar position="static">
            <Toolbar className="header">
                <div className="container-logo">
                <Link to ="/"><img src='/logogaema.png' alt="Logo" /> </Link>
                    <ul>
                         <li>
                            <Button 
                              style={{backgroundColor: "lightblue" }}
                            >
                              <Link to ="/">Inicio</Link>
                           </Button> 
                        </li>
                         <li>
                             
                            <Button
                              id="basic-button"
                              aria-controls={open ? 'basic-menu' : undefined}
                              aria-haspopup="true"
                              aria-expanded={open ? 'true' : undefined}
                              onClick={handleClick}
                              style={{backgroundColor: "lightblue"} }
                             
                              >
                              Productos
                              </Button>
                              <Menu
                              id="basic-menu"
                              anchorEl={anchorEl}
                              open={open}
                              onClose={handleClose}
                              MenuListProps={{
                                 'aria-labelledby': 'basic-button',
                              }}
                              >

                              {categorias.map( (cat) => {   
                                 return <MenuItem onClick={handleClose} key={cat}><Link to={`/products/${cat}`}>{cat}</Link></MenuItem>
                              })}
                              
                           </Menu>
                         </li>
                         <li>
                            <Button
                              style={{backgroundColor: "lightblue"}}
                            >
                               <Link to ="/Nosotros">Nosotros</Link> 
                             </Button> 
                         </li>
                         <li>
                            <Button
                              style={{backgroundColor: "lightblue"}}
                            >
                            <Link to ="/Contacto">Contacto</Link> 
                            </Button> 
                         </li>
                         <li>
                          <Carro />
                          </li>
                     </ul>
         
                </div>
             
            </Toolbar>
         </AppBar>
        
    )
}

export default NavBar