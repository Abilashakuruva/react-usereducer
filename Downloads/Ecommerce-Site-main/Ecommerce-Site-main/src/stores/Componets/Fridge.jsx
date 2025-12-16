
import React from 'react'
import { fridgeData } from '../data/fridge'
import { Link } from 'react-router-dom'

const Fridge = () => {
    const firstfiveimg=fridgeData.slice(0,5)
  return (
    <>
    <div className='protitle'>
    <h2>Fridges</h2>
    </div>
    <div className='prosec'>
      {
        firstfiveimg.map((item)=>{
            return(
                <div className='imagebox'>
                  <Link to='/fridge' ><img className='proimg' src={item.image} alt="" /> </Link>
                    
                </div>
            )
        })
      }      
    </div>
    </>
    
  )
}

export default Fridge
