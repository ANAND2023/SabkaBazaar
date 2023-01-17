import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import ContentCss from '../Data/Data.module.css'
export default function Data(){
    var [data,setData] = useState([])
    useEffect(()=>{
             fetch("https://my-json-server.typicode.com/vikasgupta111/dbRepo/categories").then((result)=>{
                result.json().then((response)=>{
                    setData(response)
                  //   console.log(response)
                })
             })
    },[])
    return(
        <>
        {
         data.map((item,idx)=>{
            return   <section className={ContentCss.content}>
                      <div className= {ContentCss.container}>
                        <div className= {idx % 2 === 0 ?ContentCss.main_div: ContentCss.main_div_right}>
                             <div className={ContentCss.img}>
                                <img src={`https://sabkabazar.netlify.app/${item.imageUrl}`}/>
                             </div>
                             <div className={ContentCss.info}>
                                <h4>{item.name}</h4>
                                <p>{item.description}</p>
                                <button className={ContentCss.btn}><Link to="/product">Explore {item.key}</Link></button>
                             </div>
                        </div>
                      </div>
            </section>
         })
        }
        </>
    )
}