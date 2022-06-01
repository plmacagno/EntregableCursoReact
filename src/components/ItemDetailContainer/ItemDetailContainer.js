import { useState, useEffect } from 'react';
import ItemDetail from "../ItemDetail/ItemDetail";
import productos from "../Data/ProductsMock";
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {
    const { id } = useParams()
    const [product, setProduct] = useState ({})

 
    useEffect( () => {

            setProduct(productFilter)
            
             
    }, [id])            
                
    const productFilter = productos.find( (product) => {
        return product.id == id
     })

    return(
        <>
 
         <ItemDetail data={product}/>
       </>
    )
}

export default ItemDetailContainer
