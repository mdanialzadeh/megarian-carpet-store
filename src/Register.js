import './Login.css'
import React, { useState } from 'react';
import {auth} from "./firebase"
import { useHistory } from "react-router-dom"
import { useStateValue } from './StateProvider'
import "firebase/database"



function Register() {

    const [{state,user}, dispatch] = useStateValue();
    const history = useHistory()

    const[email,setEmail] = useState('');
    const[password, setPassword] = useState('')
    const[firstName, setfirstName] = useState('')
    const[lastName, setlastName] = useState('')
    const[phoneNumber, setphoneNumber] = useState('')
    
    const[street, setstreet] = useState('')
    const[city, setcity] = useState('')
    const[State, setState] = useState('')
    const[zipCode, setzipCode] = useState('')
    const[country, setcountry] = useState('')


    const updateUser = () => {
    dispatch({
          type: "SET_USERL_INFO",
          userL: {
                 firstName: `${firstName}`,
                 lastName: `${lastName}`,
                 phoneNumber: `${phoneNumber}`,
                 email: `${email}`,
                 adress: {
                     street: `${street}`,
                     city: `${city}`,
                     State: `${State}`,
                     zipCode: `${zipCode}`,
                     country: `${country}`,
                 }
             }}
    
          )  }


   

    const Mask = e => {
        var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '')
      }   

      
    const register =  e => {
       e.preventDefault()
       updateUser()
        auth
        .createUserWithEmailAndPassword(email,password)
        .then((auth) => {
            console.log(auth);
            if (auth) {
                
                history.push('/')
            }
        })
        .catch(error => alert(error.message))
    }


 

    return (
  <div className="register">
                    <h1>Register</h1>
                    <form className="register_form">
                        <h4>Name:</h4>
                            <input type="text" required placeholder="First Name" value={firstName} onChange={e => setfirstName(e.target.value)}/>
                            <input type="text" required placeholder="Last Name" value={lastName} onChange={e => setlastName(e.target.value)}/>
                        <h4>Phone Number</h4> 
                            <input type="text" placeholder="(555) 555-5555" onInput={e =>Mask(e)} onChange={e => setphoneNumber(e.target.value)} required value={phoneNumber}></input>
                            <h4>E-mail:</h4>
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)} required></input>
                        <h4>Password:</h4>            
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} required></input> 

                        <div class="form-group">
                            <input type="street" class="form-control" id="autocomplete" placeholder="Street"required value={street} onChange={e => setstreet(e.target.value)}/>
                            <input type="city" class="form-control" id="inputCity" placeholder="City" required value={city} onChange={e => setcity(e.target.value)}/>
                            <input type="state" class="form-control" id="inputState" placeholder="State" required value={State} onChange={e => setState(e.target.value)}/>
                            <input type="zip" class="form-control" id="inputZip" placeholder="Zip" required value={zipCode} onChange={e => setzipCode(e.target.value)}/>
                            <input type="country" class="form-control" id="inputCountry" placeholder="Country" required value={country} onChange={e => setcountry(e.target.value)}/>
                        </div>                     
    
                        <button className="register_button" onClick={register}>Register</button>
                    </form>
                    
                </div>  
    )
}

export default Register


