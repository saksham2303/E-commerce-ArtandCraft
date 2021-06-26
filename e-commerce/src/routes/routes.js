import React from 'react'
import {Switch , Route, Redirect} from 'react-router-dom';
import Checkout from '../components/App';
import Login from '.././LoginSignup';
import FormLogin from '../components/loginForm/FormLogin'
import Dashboard from '../components/Dashboard'
import AddProduct from '../components/AddProduct';
import AddedProducts from '../components/AddedProducts'
import ViewProduct from '../components/ViewProduct';

function Routes() {
    return (
        <Switch>
                <Route path ="/Signup" exact component={Login} />
                {/* <Route path ="/Dashboard" exact component={Dashboard} /> */}
                <Route path ="/Dashboard/Addproduct" exact component={Dashboard} />
                <Route path ="/Dashboard/Allcategories" exact component={Dashboard} />
                <Route path ="/Dashboard/Mycart" exact component={Dashboard} />
                <Route path ="/Dashboard/category" exact component={Dashboard} />
                <Route path = "/Dashboard/Checkout" exact component = {Checkout} />
                <Route path ="/Dashboard/product" component={Dashboard} />
                <Route path ="/Dashboard/collections" component={Dashboard} />
                <Route path ="/Dashboard/Askexperts" component={Dashboard} />
                <Route path ="/Dashboard/searchfilter" component={Dashboard} />
                {/* <Route path ="/Signin" component={Login} />
                <Route path ="/Signup" exact component={Signup} />
                <Route path ="/Dashboard" exact component={HDashboard} />
                <Route path ="/Dashboard/home" exact component={HDashboard} />
                <Route path ="/Dashboard/help" exact component={HDashboard} />
                <Route path ="/Dashboard/discussion" exact component={HDashboard} />
                <Route path ="/Dashboard/announcements" exact component={HDashboard} />
                <Route path ="/Dashboard/editinfo" exact component={HDashboard} /> */}
                <Redirect to="/Signup" />
                
                


        </Switch>
    )
}

export default Routes
