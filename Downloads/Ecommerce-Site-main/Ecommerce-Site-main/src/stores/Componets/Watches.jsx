
import React from 'react'
import { watchData } from '../data/watch'
import { Link } from 'react-router-dom'

const Watches = () => {
      const firstfiveimg=watchData.slice(0,5)
    
  return (
    <>
    <div className='protitle'>
    <h2>Watches</h2>
    </div>
    <div className='prosec'>
      {
        firstfiveimg.map((item)=>{
            return(
                <div className='imagebox'>
                  <Link to='/watches'><img className='proimg' src={item.image} alt="" /></Link>
                    
                </div>
            )
        })
      }      
    </div>
    </>
    
  )
}

export default Watches
