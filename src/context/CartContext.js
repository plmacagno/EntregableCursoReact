

import { createContext, useEffect, useState } from "react";

const CartContext = createContext ()

const CartProvider = ({children}) => {
    
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('products')) || [] )
    const [totalPrice, setTotalPrice] = useState(0)
   
    const getTotalPrice = () => {
        let total = 0
        cart.forEach(prod =>
            total += prod.cantidad * prod.precio)
            setTotalPrice(total)
    }
    useEffect (() => {
        getTotalPrice()
       
    }, [cart])  

    const addToCart = (item) => {
        localStorage.setItem('products', JSON.stringify([...cart, item]))
        setCart([...cart, item])
        
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const deleteItem = (id) => {
        const auxCart = cart.filter(prod => prod.id !== id);
        setCart(auxCart)
        localStorage.setItem('products', JSON.stringify(auxCart))
    }

    const clearCart = () => {
        setCart([])
        localStorage.clear()
    }    
    const values = {
        cart,
        addToCart,
        isInCart,
        deleteItem,
        clearCart,
        totalPrice

    }
   
    return (
        
        <CartContext.Provider value={values}>
            {children}
            
        </CartContext.Provider>
    )
    
}

export default CartContext
export { CartProvider }


