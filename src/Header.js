import React from 'react'
import './Header.css'
import Logo from './images/Header images/logo.png'
import ShoppingCart from '@material-ui/icons/ShoppingCartOutlined';
import PersonIcon from '@material-ui/icons/Person';
import StorefrontIcon from '@material-ui/icons/Storefront';
import { Link } from "react-router-dom"
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {

const [{basket,user}] = useStateValue()

const handleAuth = () => {
    if(user) {
        auth.signOut();
    }
}

    return (
        <div className="header">
            <div className="header_container">
                
                <div className="navleft">
                <Link to="/">
                    <img className="header_logo" alt="megarian carpet logo" src={Logo} />
                </Link>
                </div>
        
                <div className="header_nav_mid">
                    <p className= "header_welcome">
                        {!user ? '' : <p>Welcome! {user.email}</p>}
                    </p>  
                </div> 
               
               
            
                <div className="header_nav_right">  

                    <div className="headeroption">
                        <Link to={!user && '/login'} className="logIn">
                            
                                <div className="logIn">
                                    {user ? 
                                        <div className="sign_out">
                                           <div onClick= {handleAuth} > 
                                            <small className="signout">Sign Out</small>
                                           </div>
                                            <Link to='/Orders'>
                                             <small className="signout"> Orders</small>
                                            </Link>
  
                                        </div>
                                    :<PersonIcon className="header_icon" /> }
                                </div>                        
                            
                        </Link>   




                        <Link to= "/Store">
                            <StorefrontIcon className="header_icon"/>
                        </Link>
                        <Link to="/Checkout" className="checkoutheader">
                            
                                < ShoppingCart className="header_icon"/>
                                <div className="header_basketCount">{basket?.length}</div> 
                                        
                        </Link>
                        
                    </div>
                        
                                                   
                </div>             
            </div>       
                      
        </div>
    )
}

export default Header
