import axios from 'axios';
const setAuthtoken = token =>{
    if(token){
       axios.defaults.headers.common['X-Auth-Token'] = token;
    }
    else{
         delete axios.defaults.headers.common['X-Auth-Token'];   
    }
}

export default setAuthtoken;