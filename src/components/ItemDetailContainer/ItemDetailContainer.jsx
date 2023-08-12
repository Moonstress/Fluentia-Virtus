// IF WE DONT WANT TO USE FIREBASE : import { getUnProducto } from "../../asyncmock";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

//FIREBASE
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/config";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);

  const { idItem } = useParams();

  useEffect(() => {
    const nuevoDoc = doc(db, "clases", idItem);

    getDoc(nuevoDoc)
      .then(res => {
        const data = res.data();
        const nuevoProducto = { id: res.id, ...data }
        setProducto(nuevoProducto);
      })
      .catch()

  }, [idItem])

  //IF WE DONT WANT TO USE FIREBASE

  /*   useEffect(() => {
      getUnProducto(idItem)
        .then((res) => setProducto(res))
        .catch((error) => {
          // Handle error if necessary
          console.error("Error fetching product:", error);
        });
    }, [idItem]); */

  return <div>{producto ? <ItemDetail {...producto} /> : <p>Loading...</p>}</div>;
};

export default ItemDetailContainer;