import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Home from './Home/Home'
import Product from './Product/Products'
import Register from './Register/Register'
import SignIn from './SignIn/SignIn'
export default function App(){
    return(
        <>
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/Product' element={<Product/>}></Route>
            <Route path='/Register' element={<Register/>}></Route>
            <Route path='/SignIn' element={<SignIn/>}></Route>
        </Routes>
        </BrowserRouter>
        </>
    )
}