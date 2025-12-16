
import React from 'react'
import { furnitureData } from '../data/furniture'
import { Link } from 'react-router-dom'

const Furniture = () => {
    const firstfiveimg=furnitureData.slice(0,5)
  return (
    <>
    <div className='protitle'>
    <h2>Furniture</h2>
    </div>
    <div className='prosec'>
      {
        firstfiveimg.map((item)=>{
            return(
                <div className='imagebox'>
                  <Link to='/furnitures'><img className='proimg' src={item.image} alt="" /></Link>
                    
                </div>
            )
        })
      }      
    </div>
    </>    
  )
}

export default Furniture
