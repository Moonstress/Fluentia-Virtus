import { useState, useEffect} from "react"

const Categorias = () => {

    useEffect ( () => {
        document.title = 'Categoría: ${categoria}';

    }, [])


  return (
    <div>Categorias</div>
  )
}

export default Categorias