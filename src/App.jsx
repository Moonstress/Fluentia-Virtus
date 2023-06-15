import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'

const App = () => {
  return (
    <>
    <Navbar/>   
    <ItemListContainer construccion={"Esta página se encuentra en construcción"}/> 
    </>
  )
}

export default App