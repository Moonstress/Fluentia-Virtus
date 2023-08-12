import { useState, useEffect } from "react"
//import { getProductos, getProductosPorCategoria } from "../../asyncmock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

//FIRESTORE

import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "../../services/config"


const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { idCategoria } = useParams();

  //FIREBASE

  useEffect(() => {
    const misProductos = idCategoria ? query(collection(db, "clases"), where("categoria", "==", idCategoria)) : collection(db, "clases");

    getDocs(misProductos)
      .then(response => {
        const nuevosProductos = response.docs.map(doc => {
          const data =doc.data()
          return {id:doc.id, ...data}
        })
        setProductos(nuevosProductos);
      })
      .catch(error => console.log(error))

  }, [idCategoria])


  //asynckmock
  /* useEffect(() => {

    const funcion = idCategoria ? getProductosPorCategoria : getProductos;
    funcion(idCategoria)
      .then(res => setProductos(res))
      .catch(error => console.log(error))

  }, [idCategoria]) */


  return (
    <>
      <ItemList productos={productos} />
    </>
  )
}

export default ItemListContainer