import { useState, useEffect } from 'react';
import ItemDetail from "../ItemDetail/ItemDetail"
import { item } from "../ItemList/ItemList"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState ({})
    const getItem = () => {
        return new Promise ( (resolve, reject) => {
            setTimeout(() => {
                resolve (item)
            }, 2000)
        })
    }

    useEffect( () => {
            getItem()
            .then( (res) => {
                setProduct(res)
                
            })
            
        })
            
                

    return(
        <>
         <div>Contenedor ITEM </div>
         <ItemDetail data={product}/>
       </>
    )
}

export default ItemDetailContainer