import mongoose from 'mongoose';
var Schema = mongoose.Schema;
var Cart = new Schema(
    
    
    
    {

    

    productbuyer:{
        type: String,
    },
    productseller:{
        type: String,
        
    },
    productname:{
        type: String,
       
    },
    productdescription:{
        type: String,
        
    },
    productimage:{
        type: String,
       
    },
    productcategory:{
        type: String,
       
    },
    email:{
        type: String,
    },
    buyeremail:{
        type: String,
    },
     productprice:{
        type: Number,
        
    }
   
})
export default mongoose.model('Mycart', Cart, 'MyCart');
