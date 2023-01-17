import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/image/logo.png'
import NavCss from '../Navbar/Nav.module.css'
import {AiOutlineShoppingCart} from 'react-icons/ai'
export default function Navbar(){
    return(
        <>
        <section className={NavCss.main}>
        <div className={NavCss.container}>
        <div className={NavCss.row}>
        <div className={NavCss.main_nav}>
        <div className={NavCss.main_nav_left}>
        <div className={NavCss.logo}><a href="#"><img src={logo}/></a></div>
        <li><Link to="/">Home</Link></li>
        <li><Link to='/product'>Product</Link></li>
        </div>
       <div className={NavCss.main_nav_right}>
       <li><Link to='/register'>Register</Link></li>
        <li><Link to='/signIn'>  SignIn</Link></li>
        <div className={NavCss.cart}>
            <div className={NavCss.cartItem}><AiOutlineShoppingCart/> 0 item</div>
        </div>
       </div>
        </div>
        </div>
        </div>
        </section>
        </>
    )
}