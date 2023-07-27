import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ id, img, nombre, descripcion }) => {
  return (
    <div className="card" key={id}>
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <div>
          <h5 className="card-title">{nombre}</h5>
          {/* Use the map function to generate list items for each element in the descripcion array */}
          <ul className="card-text">
            {descripcion.map((desc, index) => (
              <li key={index}>{desc}</li>
            ))}
          </ul>
          <Link to={`/item/${id}`}>
            <button className="btn btn-primary">Ver Detalles</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
