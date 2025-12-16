
import React,{useState} from 'react'
import { furnitureData } from '../data/furniture'
import Navbar from '../Componets/Navbar'
import { Link } from 'react-router-dom'


const FurniturePage = () => {
    const[selectedProduct,setSelectedProduct]=useState([])
        
            const brandHandler=(mango)=>{
                if(selectedProduct.includes(mango)){
                    setSelectedProduct(selectedProduct.filter(item=>item!==mango))
                }else{
                    setSelectedProduct([...selectedProduct,mango])
                }
            }
        
            const filteredProduct=selectedProduct.length===0?
                furnitureData:furnitureData.filter((orange)=>selectedProduct.includes(orange.brand))
  return (
    <>
    <Navbar/>
    <div className="page">
            <div className="pro-selected">
                {furnitureData.map((phone)=>{
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
                    <Link to={`/furniture/${item.id}`}>
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

export default FurniturePage
