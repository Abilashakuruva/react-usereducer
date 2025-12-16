
import React from 'react'
import { womanData } from '../data/woman'
import { Link } from 'react-router-dom'

const Woman = () => {
    const firstfiveimg=womanData.slice(0,5)

  return (
    <>
    <div className='protitle'>
    <h2>Woman Fashion</h2>
    </div>
    <div className='prosec'>
      {
        firstfiveimg.map((item)=>{
            return(
                <div className='imagebox'>
                  <Link to='/womans'><img className='proimg' src={item.image} alt="" /></Link>
                    
                </div>
            )
        })
      }      
    </div>
    </>
    
  )
}

export default Woman
