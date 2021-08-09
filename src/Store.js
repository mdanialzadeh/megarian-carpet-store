import React from 'react'
import './Store.css'
import Product from './Product'
import {
    Product1_imgs, 
    Product2_imgs, 
    Product3_imgs, 
    Product4_imgs,
    Product5_imgs, 
    Product6_imgs, 
    Product7_imgs, 
    Product8_imgs,
    Product9_imgs,
    Product10_imgs,
    Product11_imgs
} from './Productimgs.js'
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
                  <Product 
                    id="000002"
                    title="carpet2"
                    image= {Product2_imgs}
                    description="carpet description"
                    price={1002.99}/>
                  <Product 
                    id="000003"
                    title="carpet3"
                    image= {Product3_imgs}
                    description="carpet description"
                    price={1002.99}/>  
           
               
               
                  <Product 
                    id="000004"
                    title="carpet4"
                    image= {Product4_imgs}
                    description="carpet description"
                    price={1002.99}/>
                  <Product 
                    id="000005"
                    title="carpet5"
                    image= {Product5_imgs}
                    description="carpet description"
                    price={12.99}/>
                  <Product 
                    id="000006"
                    title="carpet6"
                    image= {Product6_imgs}
                    description="carpet description"
                    price={12.99}/>  
                
                
                
                  <Product 
                    id="000007"
                    title="carpet7"
                    image= {Product7_imgs}
                    description="carpet description"
                    price={12.99}/>
                  <Product 
                    id="000008"
                    title="carpet8"
                    image= {Product8_imgs}
                    description="carpet description"
                    price={12.99}/>
                  <Product 
                    id="000009"
                    title="carpet9"
                    image= {Product9_imgs}
                    description="carpet description"
                    price={12.99}/>  
               
               
               
                  <Product 
                    id="000010"
                    title="carpet10"
                    image= {Product10_imgs}
                    description="carpet description"
                    price={12.99}/>
                  <Product 
                    id="000011"
                    title="carpet10"
                    image= {Product11_imgs}
                    description="carpet description"
                    price={12.99}/>  
        
                
            </div>
            </LazyLoad>
        </div>


        
    )
}

export default Store
