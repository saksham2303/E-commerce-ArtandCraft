import React, {useState,useEffect} from 'react'
import {Link, Redirect} from 'react-router-dom'
import './MyCart.css'
import * as ReactBootstrap from 'react-bootstrap';
import axios from 'axios'
function MyCart() {

const [products, setProducts] = useState([]);
    
    useEffect(() =>{
    async function fetchData(){
    const req = await axios.get(`http://localhost:5001/MyCart?email=${localStorage.getItem('useremail')}`);
    
    
    console.log("data on dahsboard- ",req.data)
    setProducts(req.data);
    

}
fetchData();
        },[])

        function removeItem(id){
            axios.delete(`http://localhost:5001/MyCart?id=${id}`)
            window.location.reload()
            
        }
        function buyItem(){
            return <Redirect to="/Dashboard/Checkout" />
        }

    return (
        <div className="all__items">
           
        <div className="myCart">
        <div className="buy_products"><ReactBootstrap.Button 
variant="primary"

type="submit"



>
<Link style={{color:"white",textDecoration:"none"}} to="/Dashboard/Checkout">Buy now</Link>
</ReactBootstrap.Button>
</div>
                { products.map(product =>(
                    
                    <div className="cart__">
                <div className="cart__items">
                    <img src={"http://localhost:5001/png/"+ product.productimage} width="240" height="330"/>
                </div>
                <div className="cart__items details">
                <h6 className="text-primary" style={{fontSize:"22px"}}>{product.productname}</h6>
                <p className="text-info">{product.productseller}</p>
                <p className="text-info" style={{marginTop:"-16px"}}>{product.productcategory}</p>
                <p className="text-muted" style={{marginTop:"-16px",width:"89%"}}>{product.productdescription}</p>
                <h6 className="text-success" style={{fontSize:"22px"}}>{"₹"+product.productprice+"  "}</h6>
                <span style={{marginLeft:"800px",marginBottom:"20px"}}>
                                    <ReactBootstrap.Button 
variant="primary"

type="submit"
onClick={() => removeItem(product._id)}


>
Remove Item
</ReactBootstrap.Button></span>

                    
                </div>
                </div>
                ))}
                    
            </div>
            
            </div>
    )
}

export default MyCart
