import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar(){
    return(
        <>
        <li><Link to="/">Home</Link></li>
        <li><Link to='/product'>Product</Link></li>
        <li><Link to='/register'>Register</Link></li>
        <li><Link to='/signIn'>SignIn</Link></li>
        </>
    )
}