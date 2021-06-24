import React, { useState, useContext, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import './FormLogin.css'
import {Link} from 'react-router-dom'
import SocialButton from './styled/SocialButton'
import BrandButton from './styled/BrandButton'
import SlidingForm from './styled/SlidingForm'
import AuthContext from '../auth/AuthContext'
import {Redirect} from 'react-router-dom'
const FormLogin = (props) => {


    const authContext = useContext(AuthContext);
  const { loginData, isAuthenticated } = authContext;

  let token = localStorage.getItem('token')
  useEffect(() =>{
    if(isAuthenticated){
      alert("Login Successfull")
    }
    // else{
    //   alert("Invalid Username or Password")
    // }
  },
  [isAuthenticated, props.history])
  const [input, setInput] = useState({
    
    email: "",
    password: ""
  })

  const {email,password} = input;

function  handleChange(e) {
setInput({
  
    ...input,
    [e.target.name]: e.target.value
  
})
}
function handleClick(e){
  e.preventDefault();
  
  loginData ({    
    email,
    password
  })
  .then(() => {
    
    window.location.reload();
  }).catch(error => {
      console.log("handlesubmit error for blog ", error)
  })
  
  // axios.post('http://localhost:6001/create',registerData)
}

    return(
   
  <SlidingForm className="login__form">
      {token ? <Redirect to="/Dashboard/Allcategories" /> : <Redirect to="/Signup" />}
    <h1 className="heading__form">Sign in</h1>
    <div>
      <SocialButton className="button">
        <FontAwesomeIcon icon={['fab', 'facebook-f']}   />
      </SocialButton>
      <SocialButton className="button">
        <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
      </SocialButton>
      <SocialButton className="button">
        <FontAwesomeIcon icon={['fab', 'google']} />
      </SocialButton>
    </div>
    <p>or use your account</p>
    <form>
      <input 
      placeholder="Email"
      type="text" 
      name = "email"
      className="email"
      value = {email}
      onChange={handleChange}
      required/>
      <input 
      placeholder="Password" 
      type="password"
      name="password"
      className="password"
      value={password}
      onChange={handleChange}
      required/>
    </form>
    <p>
      <Link to="#" className="anchor">Forgot your password?</Link>
    </p>
    <BrandButton onClick={handleClick} className="button" >Sign in</BrandButton>
  </SlidingForm>
)
    }
export default FormLogin
