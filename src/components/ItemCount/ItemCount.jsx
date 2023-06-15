import React from 'react'
import { useState } from 'react'
import '../Navbar/Navbar.css'

const ItemCount = () => {

    const [count, setCount ] = useState(1);

    const add = () => {
        setCount(count + 1);
    }

    const subtract = () => {
        setCount(count - 1);
    }

    return (
        <div>
            {/* <button onClick={subtract}> - </button> */}
            <div className='count'>{count}</div>
            {/* <button onClick={add}> + </button> */}
        </div>
    )
}

export default ItemCount

