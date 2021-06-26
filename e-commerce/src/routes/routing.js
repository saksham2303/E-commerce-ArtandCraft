import React from 'react'
import {Switch , Route, Redirect} from 'react-router-dom';
import Checkout from '../components/App';
import Login from '.././LoginSignup';
import FormLogin from '../components/loginForm/FormLogin'
import Dashboard from '../components/Dashboard'
import AddProduct from '../components/AddProduct';
import AddedProducts from '../components/AddedProducts';
import MyCart from '../components/MyCart'
import Categories from '../components/Categories';
import ViewProduct from '../components/ViewProduct'
import ExpertCollection from '../components/ExpertCollection';
import ViewCollection from '../components/ViewCollection';
import Searchfilter from '../components/Searchfilter';
function Routes() {
    return (
        <Switch>
                
                <Route path ="/Dashboard/Addproduct" exact component={AddProduct} />
                <Route path ="/Dashboard/Allcategories" component={AddedProducts} />
                <Route path ="/Dashboard/Checkout" component={Checkout} />
                <Route path ="/Dashboard/Mycart" component={MyCart} />
                <Route path ="/Dashboard/product" component={ViewProduct} />
                <Route path ="/Dashboard/category" component={Categories} />
                <Route path ="/Dashboard/Askexperts" component={ExpertCollection} />
                <Route path ="/Dashboard/collections" component={ViewCollection} />
                <Route path ="/Dashboard/searchfilter" component={Searchfilter} />
            
                {/* <Route path ="/Signin" component={Login} />
                <Route path ="/Signup" exact component={Signup} />
                <Route path ="/Dashboard" exact component={HDashboard} />
                <Route path ="/Dashboard/home" exact component={HDashboard} />
                <Route path ="/Dashboard/help" exact component={HDashboard} />
                <Route path ="/Dashboard/discussion" exact component={HDashboard} />
                <Route path ="/Dashboard/announcements" exact component={HDashboard} />
                <Route path ="/Dashboard/editinfo" exact component={HDashboard} /> */}
                
                
                


        </Switch>
    )
}

export default Routes
