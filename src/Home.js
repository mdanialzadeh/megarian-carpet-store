import { Link } from "react-router-dom"
import React from 'react'
import "./Home.css"




function Home() {
    return (
        <div className="home">
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

