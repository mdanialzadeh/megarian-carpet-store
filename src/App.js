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
import Payment from "./Payment"
import Footer from "./Footer";
import { loadStripe } from "@stripe/stripe-js"
import { Elements} from "@stripe/react-stripe-js"


const promise = loadStripe('pk_test_51JMfjxK2gc64MwyBFk7E8YqRRzkDiwMhIeFzFtAUU404cPlKzjISnY9zvfbd0LcoHGvyosertrcbxsjhip1GpByp00y1jY8YkG');


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
            <Footer />
          </Route> 
          
          <Route path="/store">
            <Header />
          <LazyLoad>
            <Store />
          </LazyLoad>
          <Footer />
          </Route>  
      
          <Route path="/checkout">
            <Header />
            <CheckOut />
            <Footer />
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
            <Payment/>
            </Elements>
            <Footer />
          </Route>       

          <Route path="/">
            <Header />
            <Home />
            <Footer />
            </Route>
        
        </Switch>  
      </div>
    </Router>
  );
}

export default App;
