import React, { useState, useContext, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import SocialButton from './styled/SocialButton'
import BrandButton from './styled/BrandButton'
import SlidingForm from './styled/SlidingForm'
import AuthContext from '../auth/AuthContext';
import { Redirect } from 'react-router'

const FormSignup = (props) => {
    let token = localStorage.getItem('token')
    const authContext = useContext(AuthContext);
    const {registerData, isAuthenticated} = authContext;
    useEffect(() =>{
      if(isAuthenticated){
       
        (<Redirect to="/Dashboard/Allcategories" />)
      }
    },
    [isAuthenticated, props.history])
  
  const [input, setInput] = useState({
      
      username: "",
      email: "",
      password: ""
    })
  
    const {username,email,password} = input;
  
  function  handleChange(e) {
  setInput({
    
      ...input,
      [e.target.name]: e.target.value
    
  })
  }
  function handleClick(e){
    e.preventDefault();
    
     registerData ({
      
      username,
      email,
      password
    })
  
    alert("Account created please login to continue")
        
  
      
  } 
    
    
    
    
    
    return(


  <SlidingForm signup>
      {token ? <Redirect to="/Dashboard/Allcategories" /> : <Redirect to="/Signup" />}
    <h1 className="heading__form">Create Account</h1>
    <div>
      <SocialButton className="button">
        <FontAwesomeIcon icon={['fab', 'facebook-f']} />
      </SocialButton>
      <SocialButton className="button">
        <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
      </SocialButton>
      <SocialButton className="button">
        <FontAwesomeIcon icon={['fab', 'google']} />
      </SocialButton>
    </div>
    <p>or register with your email</p>
    <form className="login__form">
      <input 
      placeholder="Name" 
      type="text" 
      name ="username" 
      className="username" 
      value={username} 
      onChange={handleChange} 
      required/>
      
      <input placeholder="Email" type="text" name="email" className="email" value={email} onChange={handleChange} required/>
      <input placeholder="Password" type="password" name ="password" className="password" value={password} onChange={handleChange} required/>
    </form>
    <BrandButton className="button" onClick={handleClick}>Sign up</BrandButton>
  </SlidingForm>
)}

export default FormSignup
