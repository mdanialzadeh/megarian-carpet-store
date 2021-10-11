import './Login.css'
import React, { useState } from 'react';
import {auth} from "./firebase"
import { Link, useHistory } from "react-router-dom"

function Login() {
    const history = useHistory()
    const[email,setEmail] = useState('');
    const[password, setPassword] = useState('')


  
    const signIn = e => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email,password)
        .then(auth => {
            history.push('/')
        })
        .catch(error => alert(error.message))

    }
    
   
    return (
        <div className="login">
            <div className="login_box">
                    <h1>sign in</h1>
                    <form className="login_form">
                        <h4>E-mail:</h4>
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)} required></input>
                        <h4>Password:</h4>            
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} required></input>
                        <button type="submit" className="signin_button" onClick = {signIn}>Sign in</button>
                    </form>
                    <Link to="/Register">
                         <p>Or Click Here To Register</p>
                    </Link>
                                 
            </div>            
        </div>
    )
}

export default Login


/*
const register =  e => {
    e.preventDefault();
    
    auth
    .createUserWithEmailAndPassword(email,password)
    .then((auth) => {
        console.log(auth);
        if (auth) {
            writeUserData()
            history.push('/')
        }
    })
    .catch(error => alert(error.message))
}
*/