import React,{useState,useEffect} from 'react'
import './AddProduct.css';
import * as ReactBootstrap from 'react-bootstrap';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

function ExpertCollection() {
    
    // const [picture, setPicture] = useState(null);
    let lengt = 0;
    const [imgData, setImgData] = useState(null);
    const onChangePicture = e => {
      if (e.target.files[0]) {
        document.getElementById("imagePreviews").style.display="block"
        document.getElementById("imagePreview").style.display="none"
        console.log("picture: ", e.target.files);
        // setPicture(e.target.files[0]);
        
        const reader = new FileReader();
        reader.addEventListener("load", () => {
            
          setImgData(reader.result);
        });
        reader.readAsDataURL(e.target.files[0]);
      }
    };

    const [input,setInput] = useState({

      productseller: localStorage.getItem('username'),
      productname:"",
      
      productdescription:"",
      prodcutcategory:"Painting",
      productprice: 0


    })
    const email = localStorage.getItem('useremail');
    const {productseller,productname ,productdescription,productcategory,productprice} = input

    function handleChange(e){
      setInput({
        ...input,
        [e.target.name]: e.target.value
      })

    }
const [im,setIm] = useState({
  productimage:null
})

const {productimage} = im
    function handleimagechange(e){
        setIm({
          ...im,
          productimage: e.target.files[0]
        })
    }
function combine(e){
  onChangePicture(e)
  handleimagechange(e)
}
    function handleClick(e){


      try{
      e.preventDefault();
      
      
      var form_data = new FormData();
      form_data.append("productseller",productseller);
      form_data.append("productname",productname);
      form_data.append("productimage",productimage);
      
      form_data.append("productdescription",productdescription);
      form_data.append("productcategory",productcategory);
      form_data.append("email",email);
      form_data.append("productprice",productprice);
    
      // const productdata ={
      //   productseller,
      //   productname,
      //   productimage,
      //   productdescription,
      //   productcategory,
      //   productprice
      // }
      console.log(productimage)
      const request_config = {
        method: "post",
        url: "http://localhost:5001/uploadcollection",
        headers: {
            
            "Content-Type": "multipart/form-data"
        },
        data: form_data
      }
      axios(request_config)
      alert("Product added successfully")
      
    }
    catch(err){
      alert('somethin went wrong')
    }
    }




    return (
        <div className="Adds">
            <ReactBootstrap.Form className="editinfo" action="/uploadproduct" encType="multipart/form-data">
  <div className="Choose__file">
        
            <label>Choose File</label>
            <input name='productimage' type="file" id="inpFile" className="inpFile" onChange={combine} multiple />
  <div className="image__preview" id="image__preview">
        <img src={imgData} alt="Image Preview" className="image__preview-image" id="imagePreviews" />
        <span className="image__preview_image" id="imagePreview">Image Preview</span>
  </div>
  </div>  
  <div className="Choose__file">
  <ReactBootstrap.Form.Label>Artist Name</ReactBootstrap.Form.Label>
  <ReactBootstrap.Form.Control 
  type="text" 
  name="productseller"
  value={productseller}
  onChange={handleChange}
  placeholder="Enter Author Name"

   />

<br />


  <ReactBootstrap.Form.Label>Collection Name</ReactBootstrap.Form.Label>
  <ReactBootstrap.Form.Control 
  type="text" 
  name="productname"
  value={productname}
  onChange={handleChange}
  
  placeholder="Enter Product Name" />


<br />
<ReactBootstrap.Form.Group controlId="exampleForm.ControlTextarea1">
    <ReactBootstrap.Form.Label>Collection Description</ReactBootstrap.Form.Label>
    <ReactBootstrap.Form.Control as="textarea" value={productdescription} name="productdescription" onChange={handleChange} rows={3} />
  </ReactBootstrap.Form.Group>
  <ReactBootstrap.Form.Group controlId="exampleForm.ControlSelect1">
    <ReactBootstrap.Form.Label>Collection Category</ReactBootstrap.Form.Label>
    <ReactBootstrap.Form.Control as="select" name="productcategory" value={productcategory} onChange={handleChange} >
      <option>Painting</option>
      <option>Sketching</option>
      <option>Drawing</option>
      <option>Logo Design</option>
      <option>Clay</option>
    </ReactBootstrap.Form.Control>
  </ReactBootstrap.Form.Group>

  <ReactBootstrap.Form.Label>Price</ReactBootstrap.Form.Label>
  <ReactBootstrap.Form.Control 
  type="text" 
  name="productprice"
 value={productprice} 
 onChange={handleChange}
  placeholder="Enter Price" />
  <br/>




<ReactBootstrap.Button 
variant="primary"

type="submit"
onClick={handleClick}


>
Submit
</ReactBootstrap.Button>
</div>
</ReactBootstrap.Form>

        </div>
       
    )
}

export default ExpertCollection
