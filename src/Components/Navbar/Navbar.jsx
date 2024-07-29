import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assests/logo.png'
import cart_icon from '../Assests/cart_icon.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [menu,setMenu] = useState('shop')
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>setMenu('shop')} className={menu==='shop'?'active':''} ><Link to='/' style={{textDecoration:'none'}} >Shop</Link></li>
            <li  onClick={()=>setMenu('mens')} className={menu==='mens'?'active':''}><Link to='/mens' style={{textDecoration:'none'}} >Men</Link></li>
            <li onClick={()=>setMenu('womens')} className={menu==='womens'?'active':''}><Link to='/womens' style={{textDecoration:'none'}} >Women</Link></li>
            <li onClick={()=>setMenu('kids')} className={menu==='kids'?'active':''}><Link to='/kids' style={{textDecoration:'none'}} >Kids</Link></li>
        </ul>
        <div className="nav-login-cart">
            <Link to='/login' ><button>Login</button></Link>
            <Link to='/cart' ><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">0</div>
        </div>

    </div>
  )
}

export default Navbar