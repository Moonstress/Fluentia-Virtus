import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import ItemCount from './components/ItemCount/ItemCount.jsx'
import Landing from '../src/components/Landing.jsx'
import Map from './components/Map/Map.jsx'

const App = () => {
  return (
    <>
    <ItemListContainer/>
    <Navbar/>           
    <ItemCount stock={10} initial={1}/>
    <Map/>
    <Landing/> 
    </>
  )
}

export default App