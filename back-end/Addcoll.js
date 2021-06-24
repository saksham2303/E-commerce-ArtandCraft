import mongoose from 'mongoose';
var Schema = mongoose.Schema;
var Addcoll = new Schema({

    
    collectionowner:{
        type: String,
        
    },
    collectionname:{
        type: String,
       
    },
    collectiondescription:{
        type: String,
        
    },
    collectionimage:{
        type: String,
       
    },
    collectioncategory:{
        type: String,
       
    },
    email:{
        type: String,
    },
    collectionprice:{
        type: Number,
        
    }
   
})
export default mongoose.model('Collection', Addcoll, 'Collection');