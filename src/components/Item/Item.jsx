import {} from "react-router-dom"
import {Link} from 'react-router-dom'
import "./Item.css"


const Item = ({id,img,nombre,descripcion}) => {
  return (
    
    <div className="card" key={id}>
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">

            <div>
                <h5 className="card-title">{nombre}</h5>
                <p className="card-text">{descripcion}</p>
                <Link to={`/item/${id}`}>
                <button className="btn btn-primary">Ver Detalles</button></Link>
            </div>
        </div>
    </div>

  )
}

export default Item
