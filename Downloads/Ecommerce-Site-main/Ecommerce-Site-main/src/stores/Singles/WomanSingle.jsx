
import React from 'react'
import { womanData } from '../data/woman'
import { useParams } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import Navbar from '../Componets/Navbar'

const WomanSingle = () => {
    const {id}=useParams()

    const{addToCart,cartItems}=useCart()

    const product=womanData.find((item)=>item.id===id)

  return (
    <>
    <Navbar/>
    <div className="ind-sec">
        <div className="ind-image">
            <img src={product.image} alt=''/>
        </div>
        <div className="ind-details">
        <div className="ind-brand">
            <h3>{product.brand}</h3>
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

export default WomanSingle
