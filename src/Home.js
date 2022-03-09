import { Link } from "react-router-dom"
import React from 'react'
import "./Home.css"
import RC1 from './images/carousel images/RC1.png'
import RC2 from './images/carousel images/RC2.png'
import RC3 from './images/carousel images/RC3.png'
import RC4 from './images/carousel images/RC4.png'
import RC5 from './images/carousel images/RC5.png'
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'


function Home() {


    return (
        
    <div className="home">
           
      <Carousel variant="dark" interval={5000} fade="true" style={{  padding: "0", height: "100%" ,margin: "0"}}>

        <Carousel.Item style={{height: "100%"}} >
          <img
          className="d-block w-100"
          src={RC1}
          alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item style={{  height: "100%" }}>
          <img
          className="d-block w-100 h-100"
          src={RC2}
          alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item style={{ height: "100%" }}>
          <img
          className="d-block w-100"
          src={RC3}
          alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item style={{height: "100%" }}>
          <img
          className="d-block w-100"
          src={RC4}
          alt="Second slide"
          />

        </Carousel.Item>

        <Carousel.Item style={{ height: "100%" }}>
          <img
          className="d-block w-100"
          src={RC5}
          alt="Third slide"
          />

        </Carousel.Item>

      </Carousel>

      <Container bsPrefix="homeContainer">
      <h2>Megarian Carpet <br/>Store</h2>
                <Link to= "/Store">
                <button className="shop_button" >
                    <span className="shop_home">Shop Now</span>
                </button>
                </Link>
            
      </Container>     
 
           
    </div>
    )
}

export default Home

