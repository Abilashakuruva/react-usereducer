
import React from 'react'
import { kitchenData } from '../data/kitchen'
import { Link } from 'react-router-dom'

const Kitchen = () => {
    const firstfiveimg=kitchenData.slice(0,5)

  return (
    <>
    <div className='protitle'>
    <h2>Kitchen</h2>
    </div>
    <div className='prosec'>
      {
        firstfiveimg.map((item)=>{
            return(
                <div className='imagebox'>
                  <Link to='/kitchen'><img className='proimg' src={item.image} alt="" /></Link>
                    
                </div>
            )
        })
      }      
    </div>
    </>
 
  )
}

export default Kitchen
