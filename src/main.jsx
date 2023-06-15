import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './App.css'
import Landing from '../src/components/Landing.jsx'
import App from './App.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>   
    <App/>
    <Landing/>     
  </React.StrictMode>,
)
