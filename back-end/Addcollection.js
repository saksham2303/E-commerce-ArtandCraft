import express from 'express';
import multer from 'multer'
const router = express.Router();
import path from 'path'
import Addcoll from './Addcoll.js'

import fileUpload from 'express-fileupload'

router.get('/uploadcollection',async (req,res) => {

    const productdatas = await Addcoll.find()

    res.json(productdatas)




})
router.get('/uploadcollection',async (req,res) => {
    const cate = req.query.dat
    const productdatas = await Addcoll.find({"productcategory":cate}).limit(10)

    res.json(productdatas)




})

router.get('/uploadproductscollection',async (req,res) => {
    const cate = req.query.dat
    const productdatas = await Addcoll.find({"productcategory":cate}).sort({"$natural":"-1"})

    res.json(productdatas)




})



router.get('/viewcollection',async (req,res) => {
    const views = req.query.id;
    const data = await Addcoll.find({"_id":views})
    res.json(data);

})

router.post('/uploadcollection', async (req,res) => {

        
    
        // const productimage = req.body.productimagename;
    // const image = req.body.productimage
    const productimg = req.files.productimage
    console.log("ok ok",productimg)
    productimg.mv('public/collections/'+productimg.name, function(err){

        if(err){
            res.json({status:"file not uploaded"});
        
        }
       
    
    
    
      else  {
          const collectionowner = req.body.productseller;
        const collectionname = req.body.productname;
        const email = req.body.email;
        const collectiondescription = req.body.productdescription;
        const collectioncategory = req.body.productcategory;
        const collectionprice = req.body.productprice;
        const collectionimage = req.files.productimage.name;
        
        const collection = new Addcoll({
            collectionowner,
            collectionname,
            collectiondescription,
            collectionimage,
            collectioncategory,
            email,
            collectionprice
    
        })
        console.log(collection)
        collection.save()
        res.json({status:"insertion successfull!"})
    }

    })
    


    

   
})
export default router