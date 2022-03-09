import React from 'react'
import './Header.css'
import Logo from './images/Header images/logo.png'
import ShoppingCart from '@material-ui/icons/ShoppingCartOutlined';
import { Link } from "react-router-dom"
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'




function Header() {


  
const [{basket,user}, dispatch] = useStateValue()

const handleAuth = () => {
    if(user) {
        auth.signOut();
        dispatch ({
            type: "LOG_OUT",
            userL: null
        })
    }
}

    return (

<Navbar collapseOnSelect={true} expand="sm" bg="white" variant="light" fixed="top" className='navhome'>
  <Container>
  <Navbar.Brand >
      <Link to="/">
        <img  alt="megarian carpet logo" src={Logo} />
      </Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
  


 
    <Nav >
          <Nav.Item>
        <Nav.Link>
          <Link to= "/Store">
           Store
          </Link>
        </Nav.Link>
      </Nav.Item>
     
             

    {user ? 
      <>
      <Nav.Item>
        <Nav.Link>
          <Link to= "/Orders">
            Orders
          </Link>
        </Nav.Link>
      </Nav.Item>
      
      <Nav.Item>
        <Nav.Link>
          <div onClick= {handleAuth} > 
            <p className="signout">Sign Out</p>
          </div>
        </Nav.Link>
      </Nav.Item>
      </>
      :
      <Nav.Item>
        <Nav.Link to='./login'>
          <Link to="./login">
            <p>Sign In</p>
          </Link>
        </Nav.Link>
      </Nav.Item>
    }
                               
<Nav.Item>
       <Nav.Link>
        <Link to="/Checkout" className="checkoutheader">
          <span>
            < ShoppingCart className="header_icon"/>
              {basket?.length} 
          </span>
        </Link>
       </Nav.Link>
     </Nav.Item>    

    </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

       
    )
}

export default Header
