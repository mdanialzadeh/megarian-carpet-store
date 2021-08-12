import React from 'react'
import './Header.css'
import Logo from './images/Header images/logo.png'
import ShoppingCart from '@material-ui/icons/ShoppingCartOutlined';
import PersonIcon from '@material-ui/icons/Person';
import FavoriteIcon from '@material-ui/icons/Favorite';
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
            

            <div className= "header_nav_left">
                <Link to="/">
                    <img className="header_logo" alt="megarian carpet logo" src={Logo} />
                </Link>
                <Link to= "/Store">
                    <div className= "header_option">
                         <span className= "header_optionLineOne"></span>
                    </div>
                </Link>      

                                
            </div>
                <div className= "header_option">
                    <p className= "header_optionLineOne">
                        {!user ? '' : <p>Welcome! {user.email}</p>}
                    </p>   
                </div>
            <div className="header_nav_right">
                <Link to={!user && '/login'}>
                    <div onClick= {handleAuth} className="header_option">
                        <span className="header_optionLineOne">
                            {user ? 
                            <div>
                            <small>Sign Out</small>
                            <small>Orders</small>
                            </div>
                            :<PersonIcon className="Account" /> }
                        </span>                        
                    </div>
                 </Link>   
                <div className="header_option">
                    <FavoriteIcon className="favorites" />
                </div>
                <Link to="/Checkout">
                    <div className="header_optionBasket">  
                        < ShoppingCart />
                        <span className="header_optionLineTwo header_basketCount">{basket?.length}</span> 
                    </div>
                </Link>

            </div>        
        </div>
    )
}

export default Header
