import { createContext, useState } from "react";
let count=0;
const CartContext = createContext ()

const CartProvider = ({children}) => {
    
    const [cartListItems, setCartListItems] = useState([])
  
    const addProductToCart = (products) => {
        let isInCart = cartListItems.find(cartItem => cartItem.id === products.id)
        
        if(!isInCart) {
            console.log("Se agregó el producto al Carrito", products)
            count=count+1 
            return setCartListItems(cartListItems => [...cartListItems, products])
        }
            console.log("El producto ya está en el carrito", products)
           
            if (isInCart === true) {
                count=count+1
        }   else {
            count=0
        }   
            
    }   
       


        console.log("Total productos agregados: ", count)
       
    const data = {
        cartListItems,
        addProductToCart,
        
     
        
    }
    return (
        
        <CartContext.Provider value={data}>
            {children}
            
        </CartContext.Provider>
    )
    
}

export default CartContext
export { CartProvider }
export  { count }
