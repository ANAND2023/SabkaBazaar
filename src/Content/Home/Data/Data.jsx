import React, { useEffect, useState } from "react"

export default function Data(){
    var [data,setData] = useState([])
    useEffect(()=>{
      
             fetch("https://my-json-server.typicode.com/vikasgupta111/dbRepo/categories").then((result)=>{
                result.json().then((response)=>{
                    setData(response)
                    console.log(response)
                })
             })

    },[])
    return(
        <>
      
        {
         data.map((item)=>{
            return   <div>
            <h1>Name : {item.name}</h1>
            </div>

            
         })


            // data.map((item,index)=>(
            //            (<h1> Name : {item.name}</h1>
                       
            //            )
            // ))
        }
        </>
    )
}