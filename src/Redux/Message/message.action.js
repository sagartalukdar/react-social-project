import { api } from "../../config/api";
import { CREATE_CHAT_FAILURE, CREATE_CHAT_REQUEST, CREATE_CHAT_SUCCESS, CREATE_MESSAGE_FAILURE, CREATE_MESSAGE_REQUEST, CREATE_MESSAGE_SUCCESS, GET_ALL_CHATS_FAILURE, GET_ALL_CHATS_REQUEST, GET_ALL_CHATS_SUCCESS } from "./message.actionType"

export const createMessage=(reqData)=>async(move)=>{
    move({type:CREATE_MESSAGE_REQUEST});
    try {
        const {data}=await api.post(`/api/messages/chat/${reqData.message.chatId}`,reqData.message);
       
        reqData.sendMessageToServer(data);

        console.log("create message  ",data);
        move({type:CREATE_MESSAGE_SUCCESS,payload:data});
    } catch (error) {
        move({type:CREATE_MESSAGE_FAILURE,payload:error});
        console.log("create message error",error);
    }
}

export const createChat=(chat)=>async(move)=>{
    move({type:CREATE_CHAT_REQUEST});
    try {
        const {data}=await api.post('/api/chats',chat);
        console.log("create chat  ",data);
        move({type:CREATE_CHAT_SUCCESS,payload:data});
    } catch (error) {
        move({type:CREATE_CHAT_FAILURE,payload:error});
        console.log("create chat error",error);
    }
}

export const getAllChats=()=>async(move)=>{
    move({type:GET_ALL_CHATS_REQUEST});
    try {
        const {data}=await api.get('/api/chats');
        console.log(" get All chat   ",data);
        move({type:GET_ALL_CHATS_SUCCESS,payload:data});
    } catch (error) {
        move({type:GET_ALL_CHATS_FAILURE,payload:error});
        console.log("get All chat error",error);
    }
}