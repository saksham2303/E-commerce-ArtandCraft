import './App.css';
import Carousel from './components/Carousel';
import Header from './components/Header';
import Headertwo from './components/Headertwo';
import LoginForm from './LoginSignup'
import {Router } from 'react-router-dom';
import Routes from './routes/routes';
import history from './services/history'
import UserAuth from './components/auth/AuthState';
import AuthToken from './components/auth/tokenAuth';

if(localStorage.token){
  AuthToken(localStorage.token);
  
}
else{
console.log("no token app.js")
}
function App() {
  return (
    <UserAuth>
    <div className="App">
      <Router history={history}>
    <Routes />
   
    </Router>
      
      
    </div>
    </UserAuth>
  );
}

export default App;
