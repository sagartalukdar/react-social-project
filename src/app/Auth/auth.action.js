import axios from "axios"
import { API_BASE_URL } from "../../config/api"
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "../../Redux/Auth/auth.actionType";


export const loginUserAction=(loginData)=>async(event)=>{
    event({type:LOGIN_REQUEST});
    try {
        const {resp}=await axios.post(`${API_BASE_URL}/auth/signin`,loginData.data);
        if(resp.token){
            localStorage.setItem("jwt",resp.token);
            console.log("login Success",resp);
            event({type:LOGIN_SUCCESS,playload:resp.token});
        }
    } catch (error) {
        console.log(error);
        event({type:LOGIN_FAILURE,playload:error});
    }
}

export const registerUserAction=(registerData)=>async(event)=>{
    event({type:REGISTER_REQUEST});
   try {
    const {resp}=await axios.post(`${API_BASE_URL}/auth/signup`,registerData.data);
    if(resp.token){
        localStorage.setItem("jwt",resp.token);
        console.log("register success",resp);
        event({type:REGISTER_SUCCESS,playload:resp.token});
    }
   } catch (error) {
       console.log(error);
       event({type:REGISTER_FAILURE,playload:error});
   }
}