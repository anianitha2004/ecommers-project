import React from 'react'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'
import Nav from '../components/Nav'


const Home = () => {
    const navigate=useNavigate()
    function handleProducts(){
        navigate("/products")
    }
  return (
   <>
   <Nav/>
   
    <div className="hero-section">
        <h2>Welcome to Cartify</h2>
        <button onClick={handleProducts}>Shop now</button>
    </div>
    <center><h1>Products</h1></center>
    <div className="products">
        <img src="https://tse1.mm.bing.net/th/id/OIP.XR3R4HEh9YsbR0MgfuiYRwHaEO?pid=Api&P=0&h=180 "alt=" "/>
         <img src=" https://tse1.mm.bing.net/th/id/OIP.8ruPKXbqSULUpV-Pxs1YHwHaHT?pid=Api&P=0&h=180"alt=" "/>
          <img src="https://tse3.mm.bing.net/th/id/OIP.zKJEzVWBgSYzvHID30YEUQHaEJ?pid=Api&P=0&h=180 "alt=" "/>
    </div>
    <div className="products">
        <img src="https://media.karousell.com/media/photos/products/2023/9/20/galaxy_sheer_top_1695208130_fe5cb12d.jpg "alt=" "/>
         <img src=" https://tse2.mm.bing.net/th/id/OIP.335F3miKQbHZE81sa44VFAHaHa?pid=Api&P=0&h=180"alt=" "/>
          <img src=" https://tse4.mm.bing.net/th/id/OIP.4hpOf5W6yDVDTTOEshwuMQHaHa?pid=Api&P=0&h=180"alt=" "/>
    </div>
    <Footer/>
   </>
  )
}

export default Home