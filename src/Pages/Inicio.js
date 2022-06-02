import ItemListContainer from "../components/ItemListContainer/ItemListContainer"


const Inicio = (productos) => {
    let styleCustom ={
        color : "green",
    } 
    return (
        <div className="App" style={styleCustom} >
            <ItemListContainer title={'Nuestros Productos'} products={productos}/>
        </div>    
    )

}

export default Inicio