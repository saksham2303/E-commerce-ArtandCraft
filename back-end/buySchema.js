import mongoose from 'mongoose';
var Schema = mongoose.Schema;
var buyer = new Schema(
    
    
    
    
    {

   buyer:{
        type: String,
    },
    seller:{
        type: String,
    },
    productname:{
        type: String,
    },
    price:{
        type: String,
    },
    productimage:{
        type: String,
    },
    buyeremail:{
        type: String,
    },
    selleremail:{
        type: String,
    },
   
}

)
export default mongoose.model('Orders', buyer, 'Orders');
