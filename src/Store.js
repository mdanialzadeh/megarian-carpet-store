import React from 'react'
import './Store.css'
import Product from './Product'
import ImageData from './images/Products/imagedata'


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

            <div className="storecontainer">
                <div className="firstrow">
                <Product 
                    id="000001"
                    title="carpet1"
                    image= {ImageData[0]}
                    description="carpet description"
                    price={12.99}/>
                <Product 
                    id="000002"
                    title="carpet1"
                    image= {ImageData[1]}
                    description="carpet description"
                    price={12.99}/>
                <Product 
                    id="000003"
                    title="carpet1"
                    image={ImageData[2]}
                    description="carpet description"
                    price={12.99}/>
                </div>
                <div className = "secondrow">
                <Product 
                    id="000004"
                    title="carpet1"
                    image= {ImageData[3]}
                    description="carpet description"
                    price={12.99}/>
                <Product 
                    id="000005"
                    title="carpet1"
                    image= {ImageData[4]}
                    description="carpet description"
                    price={12.99}/>
                <Product 
                    id="000006"
                    title="carpet1"
                    image={ImageData[5]}
                    description="carpet description"
                    price={12.99}/>
                </div>
                <div className = "thirdrow">
                <Product 
                    id="000007"
                    title="carpet1"
                    image= {ImageData[6]}
                    description="carpet description"
                    price={12.99}/>
                <Product 
                    id="000008"
                    title="carpet1"
                    image= {ImageData[7]}
                    description="carpet description"
                    price={12.99}/>
                <Product 
                    id="000009"
                    title="carpet1"
                    image={ImageData[8]}
                    description="carpet description"
                    price={12.99}/>
                </div>            
                            
            </div>
        </div>
    )
}

export default Store
