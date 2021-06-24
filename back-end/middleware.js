import jwt from 'jsonwebtoken';

const JWT_Secret = 'jhvfjhvfehfvhfvhefcehffeyfeyfeyfyefeyfyeyegfe';
function auth(req, res,next) {

    const token = req.header('X-Auth-Token');
    if(!token && token==undefined){
        console.log("Middleare no token")
        return res.status(401).json({message: "no token"})
        
    }
    

    try{
        // console.log("token", token)
        const decodetoken =  jwt.verify(token, JWT_Secret)
        // console.log("decoding step 3")
        req.user = decodetoken.user;
        next()

    }catch(error){
        res.status(401).json({message: error})
    }
}
export default auth;
