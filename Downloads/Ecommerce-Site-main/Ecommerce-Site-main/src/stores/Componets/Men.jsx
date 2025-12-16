
import React from 'react'
import { menData } from '../data/mens'
import { Link } from 'react-router-dom'

const Men = () => {
    const firstfiveimg=menData.slice(0,5)          
    
  return (
    <>
    <div className='protitle'>
    <h2>Men Fashion</h2>
    </div>
    <div className='prosec'>
      {
        firstfiveimg.map((item)=>{
            return(
                <div className='imagebox'>
                  <Link to='/mens' ><img className='proimg' src={item.image} alt="" /> </Link>
                    
                </div>
            )
        })
      }      
    </div>
    </>    
  )
}

export default Men
