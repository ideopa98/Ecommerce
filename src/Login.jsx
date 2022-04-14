import React, { useState } from 'react';
import "./Login.css";

const Login = () => {
  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');
  const signIn=e=>{
     e.preventDefault()

    //  firebase logIn
  }
  const register=e=>{
    e.preventDefault()

    // firebase register
  }
  return (
    <>
    <div className='login'>
      <img className='login__logo' 
      src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"/>
   i 
    <div className="login__container">
     <h1>Sign-in</h1> 
     <form>
       <h5>E-mail</h5>
        <input type='text' value={email} onChange={e=>setEmail(e.target.value)}/>
        <h5>Password</h5>
        <input type='password' value={password} onChange={e=>setPassword(e.target.value)}/>
        <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
     </form>
     <p>
       By signing in you agree to Amazon's clone Conditions of use & sale. Please see our Privacy Notice, our Cookies Notice and our Interst-Based ads Notice.
     </p>
     <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>
    </div>
    </div>
    </>
     )
}

export default Login