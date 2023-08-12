import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import API from './components/API/API.jsx'
import Landing from '../src/components/Landing.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CarritoProvider } from './context/CarritoContext.jsx'
import Cart from './components/Cart/Cart.jsx'
import Productos from './components/Productos/Productos.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx'
import Checkout from './components/Checkout/Checkout.jsx'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
          <API />
          <Navbar />
          <Routes>
            <Route path="/" element={<><Landing /> <Productos/></>} />
            <Route path="/categoria/:idCategoria" element={<ItemListContainer />} />
            <Route path="/item/:idItem" element={<ItemDetailContainer />} /> 
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
          </Routes>
        </CarritoProvider>
      </BrowserRouter>


    </>
  )
}

export default App