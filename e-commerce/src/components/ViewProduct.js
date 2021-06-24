import React,{useState,useEffect} from 'react'
import './ViewProduct.css'
import {Link} from 'react-router-dom'
import * as ReactBootstrap from 'react-bootstrap';
import axios from 'axios'
function ViewProduct() {
    const [products, setProducts] = useState([]);
    
    useEffect(() =>{
    async function fetchData(){
    const req = await axios.get(`http://localhost:5001/viewproduct?id=${localStorage.getItem('viewproduct')}`);
    
    
    console.log("data on dahsboard- ",req.data)
    setProducts(req.data);
    

}
fetchData();
        },[])

        function addToCart(seller,prod,file,category,des,em,price){
            
            try{
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
             catch(error){
                alert("Something went wrong please try again")
             }
            
        }
        
    return (
        <div className="view__product">
            <div className="view">
            
            {products.map(product =>(
                <div className="view__">
            <div className="view__items">
                <img src={"http://localhost:5001/png/"+ product.productimage} width="270" height="380"/>
            </div>
            <div className="view__items details">
            <h6 className="text-primary" style={{fontSize:"22px"}}>{product.productname}</h6>
            <p className="text-info">{product.productseller}</p>
            <p className="text-info" style={{marginTop:"-16px"}}>{product.productcategory}</p>
            <p className="text-muted" style={{marginTop:"-16px",width:"89%"}}>{product.productdescription}</p>
            <h6 className="text-success" style={{fontSize:"22px"}}>{"₹"+product.productprice+"  "}</h6>
            {product.productseller != localStorage.getItem('username') ? <span style={{marginTop:"30px"}}>
                <ReactBootstrap.Button 
variant="primary"

type="submit"



>
Buy Now
</ReactBootstrap.Button>              
<ReactBootstrap.Button 
variant="primary"
style={{marginLeft:"20px"}}
type="submit"
onClick = {() => addToCart(product.productseller,product.productname,product.productimage,product.productcategory,
    product.productdescription
    ,product.email ,product.productprice
    
    
    
    )}



>
Add to Cart
</ReactBootstrap.Button>



  </span>
  :
  <span><p>My Product</p></span>
}
                
            </div>
            </div>
            ))}
                
        </div>
        </div>
    )
}

export default ViewProduct
