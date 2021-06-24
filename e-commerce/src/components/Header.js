
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import axios from 'axios';
import React, {useState,useEffect} from 'react'
import {Redirect, Link} from 'react-router-dom'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function Header() {

    const token = localStorage.getItem('token')
    console.log(token);
    
    if(token==null){
        <Redirect to="/Signup" />
    }
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
        <div className="header" >
            <div className="header__color">
            <div className= "header__logo">
                <h2><Link style={{color:"white", textDecoration:"none"}} to="/Dashboard/Allcategories">Artistics</Link></h2>
                
            </div>
            <div className="header__searchbar">
                <div className="searchbar__wrap">
                    <input type="text" className="search__bar" placeholder="Search here" />
                    <div className="search__icon">
                       <Link style={{color:"white", textDecoration:"none"}}><SearchIcon /></Link> 
                    </div>
                
                </div>
                
            </div>
            <div className="my__account">

                <span>Hello</span>
                <h3>

                { people ? people.map((person =>(

                person ? localStorage.setItem('username',person.username): localStorage.removeItem("token"),
                localStorage.setItem('useremail',person.email)
                ,
                <Link to="/Dashboard">
                    {person!=null ? person.username : <Redirect to="/Signup" />}

                    
                </Link>
))):localStorage.removeItem("token")}
                </h3>
            </div>
            <div className="my__orders">
                <span>Add</span>
                <h3><Link to="/Dashboard/Addproduct">Products</Link></h3>
            </div>
            <div className="my__cart">
                <Link to="/Dashboard/Mycart"><ShoppingCartIcon /></Link>
                <Link to="/Dashboard/Mycart">Cart</Link>
            </div>
            <div className="logout__section">
                <Link to="#"><ExitToAppIcon /></Link>
                <Link to="#" onClick={logoutuser}>Logout</Link>
                
            </div>
            </div>

        </div>
    )
}

export default Header
