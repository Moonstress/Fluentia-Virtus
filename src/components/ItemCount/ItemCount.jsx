import { useState } from 'react'
import './ItemCount.css'

const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial);

    const add = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    const subtract = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    return (
        <div className='Counter'>
            <div className='Controls'>
                <button className="btn btn-light" onClick={subtract}> - </button>
                <div className='Count'>{count}</div>
                <button className="btn btn-light" onClick={add}> + </button>
            </div>
            <div>
                <button type="button" className="btn btn-light btn-cart" data-bs-toggle="button" onClick={() => onAdd(count)} disabled={!stock}>
                    Agregar al Carrito
                </button>
            </div>
        </div>
    )
}

export default ItemCount

