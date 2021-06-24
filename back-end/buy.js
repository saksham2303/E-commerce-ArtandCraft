import express from 'express';
import multer from 'multer'
const router = express.Router();
import path from 'path'
import Addprod from './buySchema.js'

import fileUpload from 'express-fileupload'

router.get('/Orders',async (req,res) => {
    const email = req.query.email;
    const productdatas = await Addprod.find({"buyeremail":email})

    res.json(productdatas)




})

router.delete('/Orders',async (req,res) => {
    const id = req.query.id;
    await Addprod.findOneAndDelete({"_id":id})

    




})

router.post('/Orders', async (req,res) => {

        
        const datas = req.query.data["price"];
        console.log(datas)
        
        
        const product = new Addprod({
            
    
        })
        
        product.save()
        res.json({status:"insertion successfull!"})
    

    })
    


    

   

export default router