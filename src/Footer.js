import React from 'react'
import './Footer.css'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'


function Footer() {
    return (
        <Navbar bg="white" variant="light" fixed="bottom" style={{height: "65px"}}>
        <Container style={{textAlign:"center", justifyContent:"space-evenly", paddingTop:"8px"}} >
            <p>Contact <br/>Us</p>
            <p>Adress: <br/>123 street road</p>
            <p>Phone: <br/>(123) 456-7890</p>
        </Container>

        </Navbar>
    )
}

export default Footer
