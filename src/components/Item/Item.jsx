import React from "react";
import PropTypes from 'prop-types'; // Import PropTypes for prop validation
import { Link } from "react-router-dom";
import "./Item.css";

/**
 * A component representing an item card.
 * @param {Object} props - The props object containing item details.
 * @param {string} props.id - The unique ID of the item.
 * @param {string} props.img - The URL of the item's image.
 * @param {string} props.nombre - The name of the item.
 * @param {string} props.descripcion - The description of the item (can contain HTML).
 * @returns {JSX.Element} - JSX element representing the item card.
 */

const Item = ({ id, img, nombre, descripcion }) => {
  return (
    <div className="card" key={id}>
      <img src={img} className="card-img-top" alt={`${nombre} Image`} />
      <div className="card-body">
        <div>
          <h5 className="card-title">{nombre}</h5>
          <div className="card-text" dangerouslySetInnerHTML={{ __html: descripcion }} />
          <Link to={`/item/${id}`}>
            <button className="btn btn-primary">Ver Detalles</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

// PropTypes validation
Item.propTypes = {
  id: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  nombre: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
};

export default Item;
