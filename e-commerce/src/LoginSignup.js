import React from 'react'

import './styles.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faFacebookF,
  faLinkedinIn,
  faGoogle
} from '@fortawesome/free-brands-svg-icons'

import { ThemeProvider } from 'styled-components'

import theme from './theme'

import LoginForm from './components/loginForm/'

library.add(faFacebookF, faLinkedinIn, faGoogle)

function LoginSignup() {
    const  body  = {
        fontFamily: "'Montserrat', sans-serif",
        textAlign: "center",
        background: "#eee",
        margin: 0,
        padding: 0
      }
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <LoginForm style = {{body}} />
      </div>
    </ThemeProvider>
  )
}

export default LoginSignup

