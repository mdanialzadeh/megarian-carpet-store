import React, {useEffect} from "react";
import './App.css';
import Header from './Header.js'
import Home from './Home.js'
import Store from './Store'
import CheckOut from "./CheckOut";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./Login";
import {auth} from "./firebase"
import { useStateValue } from "./StateProvider";
import LazyLoad from 'react-lazyload';


function App() {

  const [{},dispatch] = useStateValue();

  useEffect(() => {

    auth.onAuthStateChanged(authUser => {
      console.log("the user is: " , authUser)

      if (authUser) {
        dispatch({
          type:'SET_USER',
          user: authUser
        })

      } else {
        dispatch({
          type:'SET_USER',
          user: null
        })

      }
    })
  }, [])

  return (
    //BEM
    <Router>
      <div className="app">
        <Switch>

        <Route path="/login">
            <Header />
            <Login />
          </Route> 
          
          <Route path="/store">
            <Header />
          <LazyLoad>
            <Store />
          </LazyLoad>
          </Route>  
      
          <Route path="/checkout">
            <Header />
            <CheckOut />
          </Route>       

          <Route path="/">
            <Header />
            <Home />
            </Route>
        
        </Switch>  
      </div>
    </Router>
  );
}

export default App;
