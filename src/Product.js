import React, {useState} from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Carousel from 'react-bootstrap/Carousel'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

function Slider (images)  {
  
   let slides = images.image
    

    return (
      

    <Carousel  interval={null} style={{ width: '100%', padding: "0rem", height: "100%"}} >
      
      {slides.map(element => {
        
        return (
          
          <Carousel.Item style={{height: '100%'}}>
        <img
        className="x-block"
        src={element}
        alt="slide"
        />
        </Carousel.Item>
    
    )
  })};

  </Carousel>

    )
   
}


function Product({id, title, image, description, price}) {

       
        const [state, dispatch] = useStateValue();

        const addToBasket = () => {
            dispatch({
                type: 'ADD_TO_BASKET',
                item: {
                    id:id,
                    title: title,
                    image: image[0],
                    price: price,
                }
            })
        }
    return (
    
      <Card className="text-center" text="dark" bg='light' style={{ margin:"1em", border:"1px solid black"}}>
      {Slider({image})}
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Card.Text>
          ${price}
        </Card.Text>
        <Button size="lg" className= "basketbtn" onClick={addToBasket} variant='dark'>Add to Basket</Button>
      </Card.Body>
    </Card>
    
 
    )
}

export default Product;
