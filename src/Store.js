import React from 'react'
import './Store.css'
import Product from './Product'
import {Product1_imgs} from './Product1imgs.js'
import LazyLoad from 'react-lazyload';

function sidebar() {
    return (
        <div className="storefilter">
              <div className="dropdown">
                <button className="dropbtn">Filter By:</button>
            </div>

            <div className="dropdown">
                <button className="dropbtn">Collection</button>
                <div className="dropdown_content">
                    <button>option 1</button>
                    <button>option 2</button>
                    <button>option 3</button>
                </div>
            </div>
            <div className="dropdown">
                <button className="dropbtn">Colors</button>
                <div className="dropdown_content">
                    <button>option 1</button>
                    <button>option 2</button>
                    <button>option 3</button>
                </div>
            </div>
            <div className="dropdown">
                <button className="dropbtn">Material</button>
                <div className="dropdown_content">
                    <button>option 1</button>
                    <button>option 2</button>
                    <button>option 3</button>
                </div>
            </div>
            <div className="dropdown">
                <button className="dropbtn">Pattern</button>
                <div className="dropdown_content">
                    <button>option 1</button>
                    <button>option 2</button>
                    <button>option 3</button>
                </div>
            </div>

        </div>
    )
}


function Store() {
    return (
        <div className="shopcontainer">
            <div className="sidebar">
                {sidebar()}
            </div>
            <LazyLoad>
            <div className="storecontainer">
                <Product 
                    id="000001"
                    title="carpet1"
                    image= {Product1_imgs}
                    description="carpet description"
                    price={12.99}/>
            </div>
            </LazyLoad>
        </div>


        
    )
}

export default Store
