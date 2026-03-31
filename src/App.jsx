import React from 'react'
import Nav from './components/Nav'
import Home from './pages/Home'
import { Routes,Route } from 'react-router-dom'
import Products from './pages/Products'

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Products" element={<Products/>}/>
    </Routes>
  
    
    </>
  )
}

export default App