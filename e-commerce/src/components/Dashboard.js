import axios from 'axios';
import React, {useState,useEffect, Fragment} from 'react'
import {Redirect, Link,Router} from 'react-router-dom'
import AddProduct from './AddProduct';
import Carousel from './Carousel'
import Header from './Header'
import Headertwo from './Headertwo'
import Routess from '../routes/routing'
import history from '../services/history'
function Dashboard() {


    const token = localStorage.getItem('token')
    console.log(token);
    
    if(token==null){
        <Redirect to="/Signup" />
    }
    const authlink = (
        <Fragment>
            
            <Header />
            <Headertwo />
            
        
        </Fragment>
    )
    const logoutuser = () =>{
        localStorage.removeItem('token')
        
        window.location.href = "http://localhost:3000/Signup"

        
    }
    
        const [people, setPeople] = useState([]);
    
        useEffect(() =>{
        async function fetchData(){
        const req = await axios.get('http://localhost:5001/receive/getdata');
        
        
        console.log("data on dahsboard- ",req.data)
        setPeople(req.data);
        
    
    }
    fetchData();
            },[token])
           




    return (
        <div>
            {token ? authlink : <Redirect to="/Signup" />}
            <Router history={history}>
           <Routess>

           </Routess>
            
            
            
            </Router>

        </div>
    )
}

export default Dashboard
