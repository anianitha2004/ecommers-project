import React from 'react'
import Nav from '../components/Nav'
import { useNavigate, useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

const Billing = () => {
    const {id}=useParams()
    const [product,setProduct]=useState({})
    const navigate=useNavigate()

    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[phone,setPhone]=useState("")
    const[address,setAddress]=useState("")
    const[quantity,setQuantity]=useState(1)
    function increment(){
        setQuantity(quantity+1)
    }
    function decrement(){
        if(quantity>1){
            setQuantity(quantity-1)
        }
    }
    useEffect(()=>{
        axios.get(`http://localhost:3000/products/${id}`)
        .then(x=>setProduct(x.data))
        .catch(err=>console.log(err))
    },[])
    function placeorder(e){
        e.preventDefault()
        let Order={
            productId:product.id,
            productName:product.name,
            productPrice:product.price,
            productQuantity:quantity,
            totalprice:product.price*quantity,
            productImg:product.img,
            productRatings:product.ratings,
            customer:{
                name:name,
                email:email,
                phone:phone,
                address:address
            },
            date:new Date().toLocaleDateString(),
            status:"pending"
        }
        axios.post("http://localhost:3000/orders",Order)
        .then(()=>{
            setName("")
            setEmail("")
            setPhone("")
            setAddress("")
            toast.success("🤞order placed🤞")
            navigate("/products")
        })
        .catch(err=>{
            toast.error("😕failed to place order😕")
        })
    }
    
  return (
   <>
    <Nav/>
    <div className="product-details">
        <div className="product-specification">
            <h3>{product.name}</h3>
            <img src={product.img} height={"300px"} alt=""/>
            <h3>price:{product.price}</h3>
            <h2>Quantity:  </h2>
            <div className="incr">
                <button onClick={decrement}>-</button>
                <h4>{quantity}</h4>
                <button onClick={increment}>+</button>
            </div>
            <h4>Total price:{quantity * product.price}</h4>
        </div>
        <div className='form'>
            <form action="" onSubmit={placeorder}>
                <input type="text" placeholder='Enter the customer name'required value={name} onChange={(e)=>{setName(e.target.value)}}/><br /><br />
                <input type="Number" placeholder='Enter your Mobile' required value={phone} onChange={(e)=>{setPhone(e.target.value)}}/><br /><br />
                <input type="email" placeholder='enter your email' required value={email} onChange={(e)=>{setEmail(e.target.value)}}/><br /><br />
                <input type="text" placeholder='address' required value={address} onChange={(e)=>{setAddress(e.target.value)}}/><br /><br />
                <div className="buton">
                    <button>order</button>
                </div>
                
            </form>
        </div>
    </div>

   </>
  )
}

export default Billing