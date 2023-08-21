import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../../services/config';
import { getDocs, collection, query } from 'firebase/firestore';
import './Productos.css';

/**
 * Productos component that displays a list of products.
 */
const Productos = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const fetchProductos = async () => {
            try {
                const misClases = query(collection(db, 'clases'));
                const response = await getDocs(misClases);

                const nuevosProductos = response.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                setProductos(nuevosProductos);
            } catch (error) {
                console.error('Error fetching productos:', error);
            }
        };

        fetchProductos();
    }, []);

    return (
        <div className="contenedorItem">
            {productos.map(producto => (
                <div className="card" key={producto.id}>
                    <img src={producto.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <div>
                            <h5 className="card-title">{producto.nombre}</h5>
                            <p
                                className="card-text"
                                dangerouslySetInnerHTML={{ __html: producto.descripcion }}
                            />
                            <Link to={`/item/${producto.id}`}>
                                <button className="btn btn-primary">Ver Detalles</button>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Productos;
