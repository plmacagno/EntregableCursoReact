import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import { DialogContent, DialogTitle } from '@mui/material';


const Modal = ({handleClose, open, children, title}) => {
    return(
    <Dialog onClose={handleClose} open={open}>
        <DialogContent>
            <DialogTitle>{title}</DialogTitle>
            {children}
        </DialogContent>
    </Dialog>    
)
}

export default Modal 
