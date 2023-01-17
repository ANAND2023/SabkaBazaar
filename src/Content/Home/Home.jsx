import React from 'react'
import Footer from '../../assets/Footer/Footer'
import Banner from './Banner/Banner'
import Data from './Data/Data'
import HomeCss from '../Home/Home.module.css'
export default function Home() {
    return (
        <>
            {/* <h1>Home component</h1> */}

            <section className={HomeCss.main}>
                <div className= {HomeCss.container}>
                    <div className= {HomeCss.homeSection}>
                        <Banner />
                        
                        <Data />
                      <Footer />
                    </div>
                </div>
            </section>
        </>
    )
}