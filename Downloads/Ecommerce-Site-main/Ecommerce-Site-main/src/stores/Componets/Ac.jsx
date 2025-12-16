import React from 'react'
import { acData } from '../data/ac'
import { Link } from 'react-router-dom'


const Ac = () => {
    const firstfiveimg=acData.slice(0,5)

  return (
    <>
    <div className='protitle'>
    <h2>Ac's</h2>
    </div>
    <div className='prosec'>
      {
        firstfiveimg.map((item)=>{
            return(
                <div className='imagebox'>
                  <Link to='/ac'>
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

export default Ac
