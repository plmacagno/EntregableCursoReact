import { useState, useEffect } from 'react';
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import db from '../Data/firebaseConfig';


const ItemDetailContainer = () => {
    const { id } = useParams()
    const [product, setProduct] = useState ({})

 
    useEffect( () => {
            
        getProduct()
        .then( (prod) => {
            setProduct(prod)
        })
            
             
    }, [id])      
    
    const getProduct = async() => {
        const docRef = doc(db, "productos", id)
        const docSnaptshop = await getDoc(docRef)
        let product = docSnaptshop.data()
        product.id = docSnaptshop.id
        return product
    }
                
     return(
        <>
 
         <ItemDetail data={product}/>
       </>
    )
}

export default ItemDetailContainer
