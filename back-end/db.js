

import mongoose from 'mongoose'

const connection_url = "mongodb+srv://admin:EMRlADQ8kAWJW7ax@cluster0.em7eo.mongodb.net/registerdata?retryWrites=true&w=majority";
const connectdb = async () =>{
     
        try{
            await mongoose.connect(connection_url,{
                useNewUrlParser: true,
                useCreateIndex: true,
                useFindAndModify: false
            })
            console.log("database connected")
        }catch(error){

            console.log(error.message)
            
        }

}



mongoose.connect(connection_url,{
    useNewUrlParser:true,
useCreateIndex:true,
useUnifiedTopology:true,
useFindAndModify: false,
})

export default connectdb;