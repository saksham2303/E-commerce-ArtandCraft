import mongoose from 'mongoose';
var Schema = mongoose.Schema;
var ProfileSchema = new Schema(
    
    {

    
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
   
})
export default mongoose.model('UserProfile', ProfileSchema, 'receive');
