import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import API from './components/API/API.jsx'
import ItemCount from './components/ItemCount/ItemCount.jsx'
import Landing from '../src/components/Landing.jsx'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <API />
        <Navbar />
        <Routes>
        <Route path="/" element={<Landing />} />  
        <Route path="/categoria/:idCategoria" element={<ItemListContainer/>} />
        <Route path="/item/:idItem" element={<ItemDetailContainer/>} />
        </Routes>
        </BrowserRouter>
         
      </>
      )
}

      export default App