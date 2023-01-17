import React, { useEffect, useState } from 'react'

import '../Banner/banner.css'
export default function Banner() {

    var [data, setData] = useState([])
    useEffect(() => {

        fetch("https://my-json-server.typicode.com/vikasgupta111/dbRepo/banners").then((result) => {
            result.json().then((response) => {
                setData(response)
                console.log(response)
            })
        })

    }, [])
    return (
        <>
           <div className="divSlider">
           <div className="container">
           <div className="pic-ctn">
                {
                    data.map((item) => {
                        return (
                            <img src={`https://sabkabazar.netlify.app/${item.bannerImageUrl}`}></img>
                        )
                    })
                }
            </div>
           </div>
           </div>
        </>
    )
}