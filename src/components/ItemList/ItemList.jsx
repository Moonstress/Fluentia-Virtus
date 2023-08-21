import React from "react";
import PropTypes from "prop-types";
import Item from "../Item/Item.jsx";
import "./ItemList.css";

/**
 * Displays a list of items.
 *
 * @component
 * @param {Array} productos - Array of product objects
 * @return {JSX.Element} ItemList component
 */
const ItemList = ({ productos }) => {
  return (
    <div className="contenedorProductos">
      {productos.map((prod) => (
        <Item key={prod.id} {...prod} />
      ))}
    </div>
  );
};

// Prop Types for validation
ItemList.propTypes = {
  productos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      // Include other required prop types here
    })
  ).isRequired,
};

export default ItemList;
