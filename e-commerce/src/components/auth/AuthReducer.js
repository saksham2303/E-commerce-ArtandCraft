import {Login_user, Login_user_failed, Register_user, Register_user_failed,  Auth_Error,Load_user, Logout_user} from '../actions';


export default (state, action) =>{
    switch(action.type){
        case Register_user:
            localStorage.setItem('tokens', action.payload.token)
            return {
                ...state,
                ...action.payload,
                isAuthenticated: false,
                
            };
        case Login_user:
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                
            };
        
        case Register_user_failed:
        
            localStorage.removeItem('tokens')
            return{
                ...state,
                token:null,
                isAuthenticated: false,
                
                user: null,
                error: action.payload
            };
        case Login_user_failed:
                
            localStorage.removeItem('token')
            return{
                ...state,
                token:null,
                isAuthenticated: false,
                
                user: null,
                error: action.payload
            };

        case Load_user: 
            localStorage.getItem('token')
            return {
                ...state,
                isAuthenticated: true,
                
                user: action.payload

            };

        default: 
        return { ...state }
    
            
        
        
    
    }
}