import express from 'express';
const router = express.Router();
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import UserProfile from './UserProfile.js';
import { check, validationResult } from 'express-validator';
import alert from 'alert';
import token from './middleware.js'
const JWT_Secret = 'jhvfjhvfehfvhfvhefcehffeyfeyfeyfyefeyfyeyegfe';








router.post("/", 
[
    
    check('username', 'Please enter valid username').not().isEmpty(),
    check('email', 'Please enter valid email').isEmail(),
    check('password', 'Please enter password with min 8 characters').isLength({min:"8"})

], async (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){

       return res.status(400).json({errors: errors.array()})
    }
    
   
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    try{
        let user  = await UserProfile.findOne({email});
        if(user){
            return res.status(400).json({message:"User already exists with this email"});
        }
        user = new UserProfile({
          
            username,
            email,
            password
        })
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

       await user.save()
       alert("Account Created please login to continue")
       const payload = {
        //    user: {
        //        id: user.id
        //    }

           user: {
            id: user.id
        }

       };
       jwt.sign(payload, JWT_Secret,{
           expiresIn: 360000
       }, (error,tokens) => {
        if(error) {
            console.log(err);
            res.sendStatus(500);
        }
        else{
            console.log(tokens)
            res.json(tokens)

            
           
        }
           
           res.status(201).json(tokens);
       })
    }
    catch(err){
    console.log(err);
    res.sendStatus(500);
    }
    
    
    

    
    
   
    
})


export default router;