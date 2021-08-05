import { Link } from "react-router-dom"
import React from 'react'
import "./Home.css"
import ImageSlider from "./ImageSlider"




function Home() {
    return (
        
        <div className="home">
            <ImageSlider />
            <div className="home_c">
                <p>Megarian Carpet Store</p>
                <Link to= "/Store">
                <button className="shop_button" >
                    <span className="shop_home">Shop</span>
                </button>
                </Link>
            </div>
            
        </div>
    )
}

export default Home

