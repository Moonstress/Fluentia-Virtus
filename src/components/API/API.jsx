import React, { useState, useEffect } from "react";
import "./API.css";

/**
 * API component fetches a random quote and displays it on top of the Navbar.
 * @component
 */

const API = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    let isMounted = true; // Flag to prevent state updates after component unmounts

    fetch('https://dummyjson.com/quotes/random')
      .then(res => res.json())
      .then(data => {
        if (isMounted) { // Check if component is still mounted before updating state
          console.log("Fetched data:", data); // Log fetched data
          setQuote(data.quote);
          setAuthor(data.author);
        }
      });

      return () => {
        isMounted = false;
      
      };
    }, []);

  return (
    <div className="quotes">
      <h4>{quote}</h4>
      <h5>- {author}</h5>
    </div>
  );
}

export default API;
