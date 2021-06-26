import React,{useState,useEffect} from 'react'
import './AddedProducts.css'
import axios from 'axios'
import {Link} from 'react-router-dom'
import VisibilityIcon from '@material-ui/icons/Visibility';
import Carousel from './Carousel';
function AddedProducts() {
    const [products, setProducts] = useState([]);
    
    useEffect(() =>{
    async function fetchData(){
    const req = await axios.get(`http://localhost:5001/uploadproducts?dat=${"Painting"}`);
    
    
    console.log("data on dahsboard- ",req.data)
    setProducts(req.data);
    

}
fetchData();
        },[])

        const [productss, setProductss] = useState([]);
    
    useEffect(() =>{
    async function fetchData(){
    const req = await axios.get(`http://localhost:5001/uploadproducts?dat=${"Drawing"}`);
    
    
    console.log("data on dahsboard- ",req.data)
    setProductss(req.data);
    

}
fetchData();
        },[])



        const [produc, setProduc] = useState([]);
    
    useEffect(() =>{
    async function fetchData(){
    const req = await axios.get(`http://localhost:5001/uploadproducts?dat=${"Sketching"}`);
    
    
    console.log("data on dahsboard- ",req.data)
    setProduc(req.data);
    

}
fetchData();
        },[])

        const [prod, setProd] = useState([]);
    
    useEffect(() =>{
    async function fetchData(){
    const req = await axios.get(`http://localhost:5001/uploadproducts?dat=${"Clay"}`);
    
    
    console.log("data on dahsboard- ",req.data)
    setProd(req.data);
    

}
fetchData();
        },[])


function viewProduct(id){
    localStorage.setItem("viewproduct",id)
}
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

    return (
    <div>
        <Carousel/>
        <div className="all__products">
        {/* <h1 className="text-secondary heading__sort">Paintings</h1> */}
            <div className="products__">
               
            {products.map(product=>(
                
                <div className="__products">
                    
                    <img src={"http://localhost:5001/png/"+ product.productimage} width="80" height="80"/>
                    <h6 className="text-primary">{product.productname}</h6>
                    <p className="text-secondary">{product.productseller}</p>
                    <p className="text-secondary">{product.productcategory}</p>
                    <h6 className="text-success">{"₹"+product.productprice+"  "} <Link className="text-info" to="/Dashboard/product" onClick={() => viewProduct(product._id)}><VisibilityIcon/></Link></h6>
                    {product.email==localStorage.getItem('useremail')?<Link>My Product</Link>:
                    
                    
                    <Link
                    onClick = {() => addToCart(product.productseller,product.productname,product.productimage,product.productcategory,
                        product.productdescription
                        ,product.email ,product.productprice
                        
                        
                        
                        )}
                    
                    
                    >Add to Cart</Link>
                    }
                   
                     
                    

                </div>
                
            ))}
            </div>
            {/* <h1 className="text-secondary heading__sort">Paintings</h1> */}
            <div className="products__">
               
            {productss.map(product=>(
                
                <div className="__products">
                    
                    <img src={"http://localhost:5001/png/"+ product.productimage} width="80" height="80"/>
                    <h6 className="text-primary">{product.productname}</h6>
                    <p className="text-secondary">{product.productseller}</p>
                    <p className="text-secondary">{product.productcategory}</p>
                    <h6 className="text-success">{"₹"+product.productprice+"  "} <Link className="text-info" to="/Dashboard/product" onClick={() => viewProduct(product._id)}><VisibilityIcon/></Link></h6>
                    {product.email==localStorage.getItem('useremail')?<Link>My Product</Link>:
                    
                    
                    <Link
                    onClick = {() => addToCart(product.productseller,product.productname,product.productimage,product.productcategory,
                        product.productdescription
                        ,product.email ,product.productprice
                        
                        
                        
                        )}
                    
                    
                    >Add to Cart</Link>
                    }
                   
                     
                    

                </div>
                
            ))}
            </div>
            {/* <h1 className="text-secondary heading__sort">Paintings</h1> */}
            <div className="products__">
               
            {produc.map(product=>(
                
                <div className="__products">
                    
                    <img src={"http://localhost:5001/png/"+ product.productimage} width="80" height="80"/>
                    <h6 className="text-primary">{product.productname}</h6>
                    <p className="text-secondary">{product.productseller}</p>
                    <p className="text-secondary">{product.productcategory}</p>
                    <h6 className="text-success">{"₹"+product.productprice+"  "} <Link className="text-info" to="/Dashboard/product" onClick={() => viewProduct(product._id)}><VisibilityIcon/></Link></h6>
                    {product.email==localStorage.getItem('useremail')?<Link>My Product</Link>:
                    
                    
                    <Link
                    onClick = {() => addToCart(product.productseller,product.productname,product.productimage,product.productcategory,
                        product.productdescription
                        ,product.email ,product.productprice
                        
                        
                        
                        )}
                    
                    
                    >Add to Cart</Link>
                    }
                   
                     
                    

                </div>
                
            ))}
            </div>
            {/* <h1 className="text-secondary heading__sort">Paintings</h1> */}
            <div className="products__">
               
            {prod.map(product=>(
                
                <div className="__products">
                    
                    <img src={"http://localhost:5001/png/"+ product.productimage} width="80" height="80"/>
                    <h6 className="text-primary">{product.productname}</h6>
                    <p className="text-secondary">{product.productseller}</p>
                    <p className="text-secondary">{product.productcategory}</p>
                    <h6 className="text-success">{"₹"+product.productprice+"  "} <Link className="text-info" to="/Dashboard/product" onClick={() => viewProduct(product._id)}><VisibilityIcon/></Link></h6>
                    {product.email==localStorage.getItem('useremail')?<Link>My Product</Link>:
                    
                    
                    <Link
                    onClick = {() => addToCart(product.productseller,product.productname,product.productimage,product.productcategory,
                        product.productdescription
                        ,product.email ,product.productprice
                        
                        
                        
                        )}
                    
                    
                    >Add to Cart</Link>
                    }
                   
                     
                    

                </div>
                
            ))}
            
           
            </div>
            
        </div>
        </div>
    )
}

export default AddedProducts
