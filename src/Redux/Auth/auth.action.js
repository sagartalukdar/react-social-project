import axios from "axios"
import { API_BASE_URL, api } from "../../config/api"
import { type } from "@testing-library/user-event/dist/type";
import { GET_PROFILE_FAILURE, GET_PROFILE_REQUEST, GET_PROFILE_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, SEARCH_USER_FAILURE, SEARCH_USER_REQUEST, SEARCH_USER_SUCCESS, UPDATE_PROFILE_FAILURE, UPDATE_PROFILE_REQUEST, UPDATE_PROFILE_SUCCESS } from "./auth.actionType";

export const loginUserAction=(loginData)=>async(event)=>{
    event({type:LOGIN_REQUEST});
    try {
        const {data}=await axios.post(`${API_BASE_URL}/auth/signin`,loginData.data);
        if(data.token){
            localStorage.setItem("jwt",data.token);

        }
        console.log("login success",data);
        event({type:LOGIN_SUCCESS,payload:data.token});
    } catch (error) {
        console.log("---------",error)
        event({type:LOGIN_FAILURE,payload:error});
    }
}

export const registerUserAction=(loginData)=>async(event)=>{
    event({type:LOGIN_REQUEST});
    try {
        const {data}=await axios.post(`${API_BASE_URL}/auth/signup`,loginData.data);
        if(data.token){
            localStorage.setItem("jwt",data.token);

        }
        console.log("register success",data);
        event({type:LOGIN_SUCCESS,payload:data.token});
    } catch (error) {
        console.log("---------",error)
        event({type:LOGIN_FAILURE,payload:error});
    }
}

export const getProfileAction=(jwt)=>async(event)=>{
    event({type:GET_PROFILE_REQUEST});
    try {
        const {data}=await axios.get(`${API_BASE_URL}/api/users/profile`,{
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });
        console.log("profile ---",data);
        event({type:GET_PROFILE_SUCCESS,payload:data});
    } catch (error) {
        console.log("------",error);
        event({type:GET_PROFILE_FAILURE,payload:error})
    }
}

export const updateProfileAction=(reqData)=>async(event)=>{
     event({type:UPDATE_PROFILE_REQUEST});
     try {
        const {data}=await api.put(`${API_BASE_URL}/api/users`,reqData);
        console.log("update Profile",data);
        event({type:UPDATE_PROFILE_SUCCESS,payload:data});

     } catch (error) {
        console.log("-------",error);
        event({type:UPDATE_PROFILE_FAILURE,payload:error});
     }
}

export const searchUser=(query)=>async(event)=>{
    event({type:SEARCH_USER_REQUEST});
    try {
        const {data}=await api.get(`/api/users/search?query=${query}`);

        console.log("search user ---",data);
        event({type:SEARCH_USER_SUCCESS,payload:data});
    } catch (error) {
        console.log("------",error);
        event({type:SEARCH_USER_FAILURE,payload:error})
    }
}

