
import React from 'react'
import { mobileData } from '../data/mobiles'
import { Link } from 'react-router-dom'

const Mobiles = () => {
  const firstfiveimg=mobileData.slice(0,5)
  return (
    <>
    <div className='protitle'>
    <h2>Mobiles</h2>
    </div>
    <div className='prosec'>
      {
        firstfiveimg.map((item)=>{
            return(
                <div className='imagebox'>
                  <Link to='/mobiles'>
                  <img className='proimg' src={item.image} alt="" />
                  </Link>
                    
                </div>
            )
        })
      }      
    </div>
    </>
  )
}

export default Mobiles
