import React from 'react'
import Nav from '../components/Nav'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios'

const Billing = () => {
    const {id}=useParams()
    const [product,setProduct]=useState({})
    const[quantity,setQuantity]=useState(1)
    function increment(){
        setQuantity(quantity+1)
    }
    function decrement(){
        if(quantity>0){
            setQuantity(quantity-1)
        }
    }
    useEffect(()=>{
        axios.get(`http://localhost:3000/products/${id}`)
        .then(x=>setProduct(x.data))
        .catch(err=>console.log(err))
    },[])
    
  return (
   <>
    <Nav/>
    <div className="product-details">
        <div className="product-specification">
            <h3>{product.name}</h3>
            <img src={product.img} height={"300px"} alt=""/>
            <h3>price:{product.price}</h3>
            <h2>Quantity:  </h2>
            <button onClick={decrement}>-</button>
            <h4>{quantity}</h4>
            <button onClick={increment}>+</button>
            <h4>Total price:{quantity * product.price}</h4>
        </div>
        <div className="form">
            <form>
                <input type="text" placeholder='Enter the customer name'/><br />
                <input type="Number" placeholder='Enter your Mobile'/><br />
                <input type="email" placeholder='enter your email'/><br />
                <input type="text" placeholder='address'/><br />
                <button>order</button>
            </form>
        </div>
    </div>

   </>
  )
}

export default Billing