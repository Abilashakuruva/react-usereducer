
import React,{useState} from 'react'
import { watchData } from '../data/watch'
import Navbar from '../Componets/Navbar'
import { Link } from 'react-router-dom'


const WatchPage = () => {
    const[selectedProduct,setSelectedProduct]=useState([])
    
        const brandHandler=(mango)=>{
            if(selectedProduct.includes(mango)){
                setSelectedProduct(selectedProduct.filter(item=>item!==mango))
            }else{
                setSelectedProduct([...selectedProduct,mango])
            }
        }
    
        const filteredProduct=selectedProduct.length===0?
            watchData:watchData.filter((orange)=>selectedProduct.includes(orange.brand))
  return (
    <>
    <Navbar/>
    <div className="page">
        <div className="pro-selected">
            {watchData.map((phone)=>{
                return(
                    <div className='pro-input'>
                        <label>
                            <input type="checkbox" 
                            checked={selectedProduct.includes(phone.brand)} 
                            onChange={()=>brandHandler(phone.brand)} />
                            {phone.brand}
                        </label>
                    </div>
                )
    
            })}
        </div>
    <div className='pagesec'>
        {filteredProduct.map((item)=>{
            return(
                <div>
                    <Link to={`/watches/${item.id}`}>

                    <div className='pageimg'>
                        <img src={item.image} alt=''/>
                    </div>
                    </Link>

                    <div className='promodel'>
                        {item.brand},{item.model}
                    </div>
                </div>
            )
        })}      
    </div>
    </div>
    </>
    
    
  )
}

export default WatchPage
