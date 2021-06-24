import React, {useState,useEffect} from 'react'
import {Link, Redirect} from 'react-router-dom'
import './MyCart.css'
import * as ReactBootstrap from 'react-bootstrap';
import axios from 'axios'
function Categories() {

const [products, setProducts] = useState([]);
    
    useEffect(() =>{
    async function fetchData(){
        const req = await axios.get(`http://localhost:5001/uploadproductscat?dat=${localStorage.getItem('category')}`);
    
    
    console.log("data on dahsboard- ",req.data)
    setProducts(req.data);
    

}
fetchData();
        },[])

        function addToCart(seller,prod,file,category,des,em,price){
            var form_data = new FormData();
            form_data.append("buyer",localStorage.getItem('username'));
            form_data.append("seller",seller);
            form_data.append("file",file);
            form_data.append("product",prod);
            form_data.append("category",category);
            form_data.append("description",des);
            form_data.append("email",em);
            form_data.append("buyeremail",localStorage.getItem('useremail'));
            form_data.append("price",price);
            const request_config = {
                method: "post",
                url: "http://localhost:5001/MyCart",
                headers: {
                    
                    "Content-Type": "multipart/form-data"
                },
                data: form_data
              }
              axios(request_config)
              alert("Added to Cart")
             
            
        }
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
        {/* <div className="buy_products"><ReactBootstrap.Button 
variant="primary"

type="submit"



>
<Link style={{color:"white",textDecoration:"none"}} to="/Dashboard/Checkout">Buy now</Link>
</ReactBootstrap.Button>
</div> */}
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
onClick={() => addToCart(product.productseller,product.productname,product.productimage,product.productcategory,
    product.productdescription
    ,product.email ,product.productprice
    
    
    
    )}


>
Add to Cart
</ReactBootstrap.Button></span>

                    
                </div>
                </div>
                ))}
                    
            </div>
            
            </div>
    )
}

export default Categories
