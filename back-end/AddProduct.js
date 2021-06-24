import mongoose from 'mongoose';
var Schema = mongoose.Schema;
var Addprod = new Schema({

    
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
     productprice:{
        type: Number,
        
    }
   
})
export default mongoose.model('Product', Addprod, 'Products');