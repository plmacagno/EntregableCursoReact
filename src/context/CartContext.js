import { createContext, useState } from "react";

const CartContext = createContext ()

const CartProvider = ({children}) => {
    
    const [cartListItems, setCartListItems] = useState([])
    const [Quantity, setQuantity] = useState(0)
  
    const addProductToCart = (products) => {
        let isInCart = cartListItems.find(cartItem => cartItem.id === products.id)
        setQuantity(Quantity + 1)
        if(!isInCart) {
            console.log("Se agregó el producto al Carrito", products)
            
           
            return setCartListItems(cartListItems => [...cartListItems, products])
        }
            console.log("El producto ya está en el carrito", products)
            
       

    }   
        
        console.log("Total productos agregados: ", Quantity)
       
    const data = {
        cartListItems,
        addProductToCart,
        Quantity
        
     
        
    }
    return (
        
        <CartContext.Provider value={data}>
            {children}
            
        </CartContext.Provider>
    )
    
}

export default CartContext
export { CartProvider }


