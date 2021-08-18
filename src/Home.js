import { Link } from "react-router-dom"
import React from 'react'
import "./Home.css"
import ImageSlider from "./ImageSlider"




function Home() {
    return (
        
        <div className="home">
            
            <div className="home_c">
                <p>Megarian Carpet <br/>Store</p>
                <Link to= "/Store">
                <button className="shop_button" >
                    <span className="shop_home">Shop Now</span>
                </button>
                </Link>
            </div>
            <ImageSlider className="slider"/>
        </div>
    )
}

export default Home

