import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import Nav from '../components/Nav'

const Cart = () => {
  const[products,setProducts]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:3000/orders")
    .then((x)=>{setProducts(x.data)})
    .catch(err=>console.log(err))
  },[])
  return (
    <>
    <Nav/>
    {products.map((x)=>{
      return <div className='cart'>
        <img src={x.productImg} height={"300px"} alt="" />
        <div className="cart-details">
          <h2>ProductName: {x.productName}</h2>
          <h2>ProductPrice: {x.productPrice}</h2>
          <h2>Quantity :{x.productQuantity}</h2>
          <h2>Total: {x.totalprice}</h2>
          <h2>order date:{x.date}</h2>
        </div>
      </div>
      
    })}
    
    </>
  )
}

export default Cart