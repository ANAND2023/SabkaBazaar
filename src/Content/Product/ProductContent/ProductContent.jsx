import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PcontCss from './ProductContent.module.css'
export default function ProductContent() {
    var [data, setData] = useState([])
     var [navdata,setNavdata] =useState([])
    useEffect(() => {
        fetch("https://my-json-server.typicode.com/vikasgupta111/productsServer/products ").then((result) => {
            result.json().then((response) => {

                setData(response)
                console.log(response)
            })
        })
    }, [])

    useEffect(()=>{
        fetch("https://my-json-server.typicode.com/vikasgupta111/dbRepo/categories").then((result)=>{
      result.json().then((response)=>{
        setNavdata(response)
        console.log(response)
      })
        })
    })
    return (
        <>
                         <div  className={PcontCss.main}>
                            <div className="container">
                                <div className={PcontCss.product_section}>
                                    <div className={PcontCss.left}>
                                    </div>
                                    <div className={PcontCss.right}>
                                        <div className={PcontCss.box}>
                                            {
                                                data.map((item,index)=>{
                                                    if(index<4)
                                                    return<div key = {index} className={PcontCss.item}>
                                                    <h3>{item.name}</h3>
                                                    <div className={PcontCss.medium}>
                                                        <div className={PcontCss.m_left}>
                                                            <div className={PcontCss.img}>
                                                                <img src={`https://sabkabazar.netlify.app/${item.imageURL}`} />
                                                            </div>
                                                        </div>
                                                        <div className={PcontCss.m_right}>
                                                            <div className={PcontCss.para}>
                                                                <p>{item.description.slice(0, 175)}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button className={PcontCss.btn}><Link to="#">Buy @ {item.price}</Link></button>
                                                </div>
                                                })
                                            }
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


        
        </>
    )
}