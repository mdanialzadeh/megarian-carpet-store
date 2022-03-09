import React, {useState, useEffect} from 'react'
import './Store.css'
import Product from './Product'
import Container from 'react-bootstrap/Container'
import {rugdb} from "./firebase"
 
 


function Store() {

 
    const [Products,setProducts]=useState([])

    const fetchProducts= () => {
    
      let ref = rugdb.ref("Rug")
      ref.on('value', snapshot => {
      
        let data = snapshot.val()
        setProducts(data)
        console.log(data)
    });

 
    }

    useEffect(() => {
      fetchProducts();

    },[])


    return (
      
        <Container fluid="xl">
             <div className='store_grid'>
             <>
      {Products.map(element => {
       
      return (
    
         <Product 
         id={element.RugID}
         title={element.RugID}
         image= {element.Images}
         description="carpet description"
         price={element.Cost} />
         
      )
    }
  )
};


 </>
             </div>
 
      
            </Container>



)
}

export default Store
