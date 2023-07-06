import { useState, useEffect } from "react"
import "./API.css"
import { useFetch } from "../Hooks/useFetch";


const API = () => {

  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {

    fetch('https://dummyjson.com/quotes/random')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setQuote(data.quote);
        setAuthor(data.author);
      });


  }, [])
  return (
    <div className="quotes">
      <h4>{quote}</h4>
      <h5>- {author}</h5>
      
    </div>

  )

}

export default API