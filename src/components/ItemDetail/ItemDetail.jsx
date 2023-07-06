import './ItemDetail.css'

const ItemDetail = ({id, img, nombre, descripcion, precio}) => {
  return (
    <div className='contenedorItem'>
      <div className='table'>
       <img src={img} alt={nombre} className="imgDetail"/></div>
       <div className='table'>
        <h2>Nombre: {nombre} </h2>        
        <p>{descripcion}</p>
        <h2>Precio: {precio} </h2>
        </div>

        
    </div>
  )
}

export default ItemDetail