import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import API from './components/API/API.jsx'
import Landing from '../src/components/Landing.jsx'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CarritoProvider } from './context/CarritoContext.jsx'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
          <API />
          <Navbar />
          <Routes>
            <Route path="/" element={<><Landing /> <ItemListContainer /></>} />
            <Route path="/categoria/:idCategoria" element={<ItemListContainer />} />
            <Route path="/item/:idItem" element={<ItemDetailContainer />} />
          </Routes>
        </CarritoProvider>
      </BrowserRouter>


    </>
  )
}

export default App