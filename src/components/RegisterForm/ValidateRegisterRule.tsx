import React from "react";
import {RegisterFormDataCorrect, RegisterFormUserData, RegisterFormDataHelpMessage} from "types";



export const validateRegisterRule = (
    data: RegisterFormUserData,
    callbackCorrect:React.Dispatch<React.SetStateAction<RegisterFormDataCorrect>>,
    callbackMessage: React.Dispatch<React.SetStateAction<RegisterFormDataHelpMessage>> ) : void => {


    // Nick...
    if (data.nick.length === 0){
        callbackMessage((prev)=>({
            ...prev,
            nick:''
        }))
    }else if(data.nick.length >= 4 ){
        callbackCorrect((prev)=>({
            ...prev,
            nick:true,
        }))
        callbackMessage((prev)=>({
            ...prev,
            nick:''
        }))
    }else{
        callbackCorrect((prev )=>({
            ...prev,
            nick: false
        }))
        callbackMessage((prev)=>({
            ...prev,
            nick:'Your nick should have min 4 characters'
        }))
    }
    // Name...
    if(data.name.length === 0){
        callbackMessage((prev)=>({
            ...prev,
            name:''
        }))
    }else if(data.name.match(/^[a-zA-Z]+$/g)){
        callbackCorrect((prev)=>({
            ...prev,
            name:true,
        }))
        callbackMessage((prev)=>({
            ...prev,
            name:''
        }))
    }else{
        callbackCorrect((prev)=>({
            ...prev,
            name:false,
        }))
        callbackMessage((prev)=>({
            ...prev,
            name:'Your name should contain only letters'
        }))
    }
    // Email...
    if(data.email.length === 0){
        callbackMessage((prev)=>({
            ...prev,
            email:''
        }))
    }else if(data.email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
        callbackCorrect((prev)=>({
            ...prev,
            email:true,
        }))

    }else{
        callbackCorrect((prev)=>({
            ...prev,
            email:false,
        }))
        callbackMessage((prev)=>({
            ...prev,
            email:'Your email is incorrect'
        }))
    }
    // Data of  birth...
    const selecDate = new Date(data.dateOfBirth)

    console.log(selecDate)

    if(data.dateOfBirth){

    }else{

    }
    // Sex...
    if(data.sex){

    }else{

    }
    // Province...
    if(data.province){

    }else{

    }
    // Account public...
    if(data.accountPublic){

    }else{

    }
    // Password...
    if(data.password1){

    }else{

    }
    if(data.password2){

    }else{

    }
}
