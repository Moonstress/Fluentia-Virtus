import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

// FIREBASE
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "../../services/config";

/**
 * Displays a list of items based on the selected category.
 *
 * @component
 * @return {JSX.Element} ItemListContainer component
 */
const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { idCategoria } = useParams();

  useEffect(() => {
    const misProductos = idCategoria
      ? query(collection(db, "clases"), where("categoria", "==", idCategoria))
      : collection(db, "clases");

    getDocs(misProductos)
      .then((response) => {
        const nuevosProductos = response.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProductos(nuevosProductos);
      })
      .catch((error) => console.log(error));
  }, [idCategoria]);

  return (
    <div>
      <ItemList productos={productos} />
    </div>
  );
};

// Prop Types for validation
ItemListContainer.propTypes = {
  productos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      // Include other required prop types here
    })
  ).isRequired,
};

export default ItemListContainer;
