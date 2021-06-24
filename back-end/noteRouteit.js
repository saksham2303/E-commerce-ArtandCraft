import express from 'express';
const router = express.Router();
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import UserProfile from './UserProfile.js';
import { check, validationResult } from 'express-validator';
import token from './middleware.js';
const JWT_Secret = 'jhvfjhvfehfvhfvhefcehffeyfeyfeyfyefeyfyeyegfe';

router.get("/",  token, async (req,res) => {
    try {
        
        const user = await UserProfile.findOne({"_id":req.user.id})
        console.log("Logged in")
        const userdata = [user]
        
        res.json(userdata)
            
        
    } catch (error) {
        console.log("Catch Error get request!")
        res.status(500).json({error})
    }
})

router.post("/",[


check('email','Please enter valid email').isEmail(),
check('password','Please enter correct passord').exists()

], async (req,res) =>{

    const errors = validationResult(req);
    if(!errors.isEmpty()){
       return res.status(400).json({errors: errors.array()})
    }

    
    
    const email = req.body.email;
    const password = req.body.password;

    try{

        let user = await UserProfile.findOne({"email": email});
        if(!user){
            return res.status(400).send({
                message: "User not found please ensure your  email"
            })
        }
        const checkpassord = await bcrypt.compare(password,user.password);
        if(!checkpassord){
            return res.status(400).json({
                message: "Incorrect Passord"
            })
            
        }
        
        const payload = {
             user: {
             id: user.id
            }
            
        };
        jwt.sign(payload, JWT_Secret,{
            
        }, (error,token) => {
            if(error) {
                console.log(error);
                res.sendStatus(500);
            }
            else{
                res.json({token})
                
                
                
            }
            
        })

    }catch(err){
        console.log("Server Error!")
        res.status(500).send("Server Error!")
    }
  
    

    
    
   
    
})

export default router;