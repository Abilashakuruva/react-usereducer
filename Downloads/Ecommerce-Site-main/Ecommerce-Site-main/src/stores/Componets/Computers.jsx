
import React from 'react'
import { computerData } from '../data/computers'
import { Link } from 'react-router-dom'

const Computers = () => {
      const firstfiveimg=computerData.slice(0,5)
    
  return (
    <>
    <div className='protitle'>
    <h2>Computers</h2>
    </div>
    <div className='prosec'>
      {
        firstfiveimg.map((item)=>{
            return(
                <div className='imagebox'>
                  <Link to='/computers'><img className='proimg' src={item.image} alt="" /></Link>
                    
                </div>
            )
        })
      }      
    </div>
    </>
  )
}

export default Computers
