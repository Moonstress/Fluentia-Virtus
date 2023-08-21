import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for prop validation
import './ItemCount.css';

/**
 * A component for displaying and managing item count and adding to cart.
 * @param {Object} props - The props object containing initial values and event handlers.
 * @param {number} props.stock - The available stock of the item.
 * @param {number} props.initial - The initial count value.
 * @param {Function} props.onAdd - The event handler when adding to cart.
 * @returns {JSX.Element} - JSX element representing the item count and add to cart component.
 */
const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial);

    const handleAdd = () => {
        if (count < stock) {
            setCount(prevCount => prevCount + 1);
        }
    };

    const handleSubtract = () => {
        if (count > 1) {
            setCount(prevCount => prevCount - 1);
        }
    };

    return (
        <div className='Counter'>
            <div className='Controls'>
                <button className="btn btn-light" onClick={handleSubtract}> - </button>
                <div className='Count'>{count}</div>
                <button className="btn btn-light" onClick={handleAdd}> + </button>
            </div>
            <div>
                <button
                    type="button"
                    className="btn btn-light btn-cart"
                    data-bs-toggle="button"
                    onClick={() => onAdd(count)}
                    disabled={!stock}
                >
                    Agregar al Carrito
                </button>
            </div>
        </div>
    );
};

// PropTypes validation
ItemCount.propTypes = {
    stock: PropTypes.number.isRequired,
    initial: PropTypes.number.isRequired,
    onAdd: PropTypes.func.isRequired,
};

export default ItemCount;
