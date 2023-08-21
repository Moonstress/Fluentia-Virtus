import React, { useState, createContext, useEffect } from 'react';

/**
 * Context to manage the cart state, including cart items, total, and quantity.
 * @type {React.Context}
 */
export const CarritoContext = createContext({
    carrito: [],
    total: 0,
    cantidadTotal: 0,
    agregarProducto: () => {},
    eliminarProducto: () => {},
    vaciarCarrito: () => {},
    initializeCartFromStorage: () => {},
});

/**
 * Provider component that wraps the app and provides cart-related context.
 * @param {React.ReactNode} children - The child components to be wrapped by the context provider.
 * @returns {React.ReactNode} Wrapped components with cart context.
 */
export const CarritoProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);
    const [cantidadTotal, setCantidadTotal] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const clearLocalStorage = () => {
        localStorage.removeItem('cartData');
    };

    const initializeCartFromStorage = () => {
        const savedCartData = localStorage.getItem('cartData');

        if (savedCartData) {
            const parsedCartData = JSON.parse(savedCartData);
            setCarrito(parsedCartData);

            const initialTotal = parsedCartData.reduce(
                (accumulator, item) => accumulator + item.item.precio * item.cantidad,
                0
            );
            setTotal(initialTotal);

            const initialCantidadTotal = parsedCartData.reduce(
                (accumulator, item) => accumulator + item.cantidad,
                0
            );
            setCantidadTotal(initialCantidadTotal);
        }
    };

    const updateCart = (newCartItem) => {
        const updatedCart = [...carrito, newCartItem];
        setCarrito(updatedCart);
        setCantidadTotal(prev => prev + newCartItem.cantidad);
        setTotal(prev => prev + newCartItem.item.precio * newCartItem.cantidad);
        localStorage.setItem('cartData', JSON.stringify(updatedCart));
    };

    useEffect(() => {
        const savedCartData = localStorage.getItem('cartData');

        if (savedCartData) {
            const parsedCartData = JSON.parse(savedCartData);
            setCarrito(parsedCartData);
            setIsLoading(false);
        } else {
            setIsLoading(false);
        }
    }, []);

    const agregarProducto = (item, cantidad) => {
        const productoExistente = carrito.find(prod => prod.item.id === item.id);

        if (!productoExistente) {
            const newCartItem = { item, cantidad };
            updateCart(newCartItem);
        } else {
            const carritoActualizado = carrito.map(prod => {
                if (prod.item.id === item.id) {
                    return { ...prod, cantidad: prod.cantidad + cantidad };
                } else {
                    return prod;
                }
            });
            setCarrito(carritoActualizado);
            setCantidadTotal(prev => prev + cantidad);
            setTotal(prev => prev + item.precio * cantidad);
            localStorage.setItem('cartData', JSON.stringify(carritoActualizado));
        }
    };

    const eliminarProducto = (id) => {
        const productoEliminado = carrito.find(prod => prod.item.id === id);
        const carritoActualizado = carrito.filter(prod => prod.item.id !== id);

        setCarrito(carritoActualizado);
        setCantidadTotal(prev => prev - productoEliminado.cantidad);
        setTotal(prev => prev - productoEliminado.item.precio * productoEliminado.cantidad);
        localStorage.setItem('cartData', JSON.stringify(carritoActualizado));
    };

    const vaciarCarrito = () => {
        setCarrito([]);
        setCantidadTotal(0);
        setTotal(0);
        localStorage.removeItem('cartData');
    };

    return (
        <CarritoContext.Provider
            value={{
                carrito,
                total,
                cantidadTotal,
                agregarProducto,
                eliminarProducto,
                vaciarCarrito,
                initializeCartFromStorage,
                clearLocalStorage,
            }}
        >
            {isLoading ? <p>Loading...</p> : children}
        </CarritoContext.Provider>
    );
};

export default CarritoContext;
