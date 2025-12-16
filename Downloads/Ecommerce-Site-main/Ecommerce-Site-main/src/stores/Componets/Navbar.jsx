
import React from 'react'
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
    const { cartItems }=useCart()


  return (
    <div className='navbarsec'>

    <div className="navsec">
        <Link to='/' className='cust-link'>
        <div className="title">
            <h2>E-Mall</h2>
        </div>
        </Link>

        <div className="search">
            <input type="text" placeholder='search...' />
        </div>
        <div className="user">
            <div className="user-deatils">
                SignIN/SignUp
            </div>

            <Link to='/cart'>
            <div className="cart">Cart
                <span>{cartItems.length}</span>
            </div>
            </Link>
            
        </div>
    </div>
    <div className="submenu">
        <ul>
            <Link to ='/mobiles' className='cust-link'><li>Mobiles</li></Link>
            <Link to='/computers' className='cust-link'><li>Computers</li></Link>
            <Link to='/watches' className='cust-link'><li>Watches</li></Link>
            <Link to='/mens' className='cust-link'><li>Men Fashion</li></Link>
            <Link to='/womans' className='cust-link'><li>Woman Fashion</li></Link>
            <Link to='/furnitures' className='cust-link'><li>Furniture</li></Link>
            <Link to='/kitchen' className='cust-link'><li>Kitchen</li></Link>
            <Link to='/ac' className='cust-link'><li>AC</li></Link>
            <Link to='/' className='cust-link'><li>Books</li></Link>
            <Link to='/' className='cust-link'><li>Washing Machines</li></Link>     
            <Link to='/fridge' className='cust-link'><li>Fridge</li></Link>            
        </ul>
    </div>
    </div>    
  );
};

export default Navbar
