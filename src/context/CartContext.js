
import { createContext, useEffect, useState } from "react";

const CartContext = createContext ()

const CartProvider = ({children}) => {
    
    const [cart, setCart] = useState([])
   
    useEffect (() => {
        console.log(cart)
    }, [cart])  

    const addToCart = (item) => {
        setCart([...cart, item])
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const deleteItem = (id) => {
        const auxCart = cart.filler(prod => prod.id !== id);
        setCart(auxCart)
    }

    const clearCart = () => setCart([])

    const values = {
        cart,
        addToCart,
        isInCart,
        deleteItem,
        clearCart

    }
   

    return (
        
        <CartContext.Provider value={values}>
            {children}
            
        </CartContext.Provider>
    )
    
}

export default CartContext
export { CartProvider }


