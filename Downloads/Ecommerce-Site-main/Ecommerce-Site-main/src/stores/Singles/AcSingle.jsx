
import React from 'react'
import { useParams } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { acData } from '../data/ac'
import Navbar from '../Componets/Navbar'

const AcSingle = () => {
    const {id}=useParams()

    const{addToCart,cartItems}=useCart()

    const product=acData.find((item)=>item.id===id)
  return (
    <>
    <Navbar/>
    <div className="ind-sec">
        <div className="ind-image">
            <img src={product.image} alt=''/>
        </div>
        <div className="ind-details">
        <div className="ind-company">
            <h3>{product.company}</h3>
        </div>
        <div className="ind-model">
            <h3>{product.model}</h3>
        </div>
        <div className="ind-price">
            <h2>{product.price}</h2>
        </div>
        <div className="ind-des">
            <p>{product.description}</p>            
        </div>
        <button className='button' onClick={()=>addToCart(product)}>Add to Cart</button>
        </div>
    </div> 

    </>
   
  )
}

export default AcSingle
