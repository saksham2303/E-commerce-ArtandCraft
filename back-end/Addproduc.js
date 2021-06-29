import express from 'express';
import multer from 'multer'
const router = express.Router();
import path from 'path'
import Addprod from './AddProduct.js'

import fileUpload from 'express-fileupload'

router.get('/uploadproduct',async (req,res) => {

    const productdatas = await Addprod.find()

    res.json(productdatas)




})
router.get('/uploadproducts',async (req,res) => {
    const cate = req.query.dat
    const productdatas = await Addprod.find({"productcategory":cate}).limit(10)

    res.json(productdatas)




})

router.get('/uploadsearch',async (req,res) => {
    const search = req.query.srch
    const productdatas = await Addprod.find({$or:[{"productcategory":search},{"productname":search}]})

    res.json(productdatas)




})


router.get('/uploadproductscat',async (req,res) => {
    const cate = req.query.dat
    const productdatas = await Addprod.find({"productcategory":cate}).sort({"$natural":"-1"})

    res.json(productdatas)




})


router.get('/viewproduct',async (req,res) => {
    const views = req.query.id;
    const data = await Addprod.find({"_id":views})
    res.json(data);

})

router.post('/uploadproduct', async (req,res) => {

        
    
        // const productimage = req.body.productimagename;
    // const image = req.body.productimage
    const productimg = req.files.productimage
    console.log("ok ok",productimg.name)
    productimg.mv('public/png/'+productimg.name, function(err){

        if(err){
            res.json({status:"file not uploaded"});
        
        }
    
    
    
      else  {
          const productseller = req.body.productseller;
        const productname = req.body.productname;
        const email = req.body.email;
        const productdescription = req.body.productdescription;
        const productcategory = req.body.productcategory;
        const productprice = req.body.productprice;
        const productimage = req.files.productimage.name;
        
        const product = new Addprod({
            productseller,
            productname,
            productdescription,
            productimage,
            productcategory,
            email,
            productprice
    
        })
        console.log(product)
        product.save()
        res.json({status:"insertion successfull!"})
    }

    })
    


    

   
})
export default router