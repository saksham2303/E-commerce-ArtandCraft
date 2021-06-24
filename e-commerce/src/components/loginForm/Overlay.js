import React from 'react'
import StyledOverlay, { InnerLogin, InnerSignup } from './styled/StyledOverlay'
import { STATE_LOG_IN } from './useToggle'

const WelcomeOverlay = () => (
  <InnerLogin className="inner">
    <h1>Welcome Back!</h1>
    <p>To keep connected with us please login with your personal info</p>
  </InnerLogin>
)

const NewOverlay = () => (
  <InnerSignup className="inner">
    <h1>Hello, Friend!</h1>
    <p>Enter your details below to start your journey with us</p>
  </InnerSignup>
)

const Overlay = ({ toggleMode, mode }) => (
  <StyledOverlay className="overlay">
    <WelcomeOverlay />
    <NewOverlay />
    <button onClick={toggleMode} className="button">
      <span>{mode === STATE_LOG_IN ? 'Sign in' : 'Sign up'}</span>
    </button>
  </StyledOverlay>
)

export default Overlay
