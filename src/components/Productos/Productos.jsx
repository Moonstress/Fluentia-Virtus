import { useState, useEffect } from "react";
import { db } from "../../services/config";
import { Link } from "react-router-dom";
import { getDocs, collection, query } from "firebase/firestore"
import "./Productos.css"

const Productos = () => {

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const misClases = query(collection(db, "clases"));

    getDocs(misClases)
      .then(response => {
        setProductos(response.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      })
      .catch(error => {
        console.log(error);
      })

  }, [])

  return (
    <div className='contenedorItem'>
      {productos.map(producto => (
        <div className="card" key={producto.id}>
          <img src={producto.img} className="card-img-top" alt="..." />
          <div className="card-body">
            <div>
              <h5 className="card-title">{producto.nombre}</h5>
              <p className="card-text" dangerouslySetInnerHTML={{ __html: producto.descripcion }}></p>
              <Link to={`/item/${producto.id}`}>
                <button className="btn btn-primary">Ver Detalles</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Productos;
