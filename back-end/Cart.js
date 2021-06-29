import express from 'express';
import multer from 'multer'
const router = express.Router();
import path from 'path'
import Addprod from './cartSchema.js'

import fileUpload from 'express-fileupload'

router.get('/MyCart',async (req,res) => {
    const email = req.query.email;
    const productdatas = await Addprod.find({"buyeremail":email})

    res.json(productdatas)




})

router.delete('/MyCart',async (req,res) => {
    const id = req.query.id;
    await Addprod.findOneAndDelete({"_id":id})

    




})
router.delete('/MyCartitems',async (req,res) => {
    const id = req.query.email;
    await Addprod.deleteMany({"buyeremail":id})
    




})

router.post('/MyCart', async (req,res) => {

        
    
        const productbuyer = req.body.buyer;
        const productseller = req.body.seller;
        const productname = req.body.product;
        const email = req.body.email;
        const buyeremail = req.body.buyeremail
        const productdescription = req.body.description;
        const productcategory = req.body.category;
        const productprice = req.body.price;
        const productimage = req.body.file;
        
        const product = new Addprod({
            productbuyer,
            productseller,
            productname,
            productdescription,
            productimage,
            productcategory,
            email,
            buyeremail,
            productprice
    
        })
        
        product.save()
        res.json({status:"insertion successfull!"})
    

    })
    


    

   

export default router