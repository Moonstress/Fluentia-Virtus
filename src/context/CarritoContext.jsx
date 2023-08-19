import React, { useState, createContext, useEffect } from "react";

export const CarritoContext = createContext({
    carrito: [],
    total: 0,
    cantidadTotal: 0,
    agregarProducto: () => {},
    eliminarProducto: () => {},
    vaciarCarrito: () => {},
    initializeCartFromStorage: () => {},
});

export const CarritoProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);
    const [cantidadTotal, setCantidadTotal] = useState(0);
    const [isLoading, setIsLoading] = useState(true); // Add a loading state
    const clearLocalStorage = () => {
        localStorage.removeItem("cartData");
    };
    
    const initializeCartFromStorage = () => {
        const savedCartData = localStorage.getItem("cartData");
    
        if (savedCartData) {
            const parsedCartData = JSON.parse(savedCartData);
            setCarrito(parsedCartData);
            
            // Calculate total and cantidadTotal here based on parsedCartData
            const initialTotal = parsedCartData.reduce((accumulator, item) => {
                return accumulator + item.item.precio * item.cantidad;
            }, 0);
            setTotal(initialTotal);
            
            const initialCantidadTotal = parsedCartData.reduce((accumulator, item) => {
                return accumulator + item.cantidad;
            }, 0);
            setCantidadTotal(initialCantidadTotal);
        }
    };
    
    const updateCart = (newCartItem) => {
        const updatedCart = [...carrito, newCartItem];
        setCarrito(updatedCart);
        setCantidadTotal(prev => prev + newCartItem.cantidad);
        setTotal(prev => prev + newCartItem.item.precio * newCartItem.cantidad);

        // Update cart data in local storage
        localStorage.setItem("cartData", JSON.stringify(updatedCart));
    };

    useEffect(() => {
        const savedCartData = localStorage.getItem("cartData");

        if (savedCartData) {
            const parsedCartData = JSON.parse(savedCartData);
            setCarrito(parsedCartData);
            setIsLoading(false); // Set loading to false when data is retrieved
        } else {
            setIsLoading(false); // If no data, still set loading to false
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
        }
    };

    //Función para eliminar producto: 

    const eliminarProducto = (id) => {
        const productoEliminado = carrito.find(prod => prod.item.id === id);
        const carritoActualizado = carrito.filter(prod => prod.item.id !== id);
    
        setCarrito(carritoActualizado);
        setCantidadTotal(prev => prev - productoEliminado.cantidad);
        setTotal(prev => prev - (productoEliminado.item.precio * productoEliminado.cantidad));
    
        // Update cart data in local storage after item is removed
        localStorage.setItem("cartData", JSON.stringify(carritoActualizado));
    };

    //Función para vaciar el carrito: 

    const vaciarCarrito = () => {
        setCarrito([]);
        setCantidadTotal(0);
        setTotal(0);
    }

    return (
        <CarritoContext.Provider value={{
            carrito,
            total,
            cantidadTotal,
            agregarProducto,
            eliminarProducto,
            vaciarCarrito,
            initializeCartFromStorage,
            clearLocalStorage, // Add this function to the context
        }}>
            {isLoading ? <p>Loading...</p> : children}
        </CarritoContext.Provider>
    )
}

export default CarritoContext