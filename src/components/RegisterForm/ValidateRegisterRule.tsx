import React from "react";
import {RegisterFormDataCorrect,RegisterFormUserDataFront,optionsProvinceSelect, optionsSexSelect, optionsAccountSelect, RegisterFormDataHelpMessage} from "types";




export const validateRegisterRule = (
    data: RegisterFormUserDataFront,
    callbackCorrect:React.Dispatch<React.SetStateAction<RegisterFormDataCorrect>>,
    callbackMessage: React.Dispatch<React.SetStateAction<RegisterFormDataHelpMessage>> ) : void => {
    // Nick...
    if (data.nick.length === 0){
        callbackMessage((prev)=>({
            ...prev,
            nick:''
        }))
    }else if(data.nick.length >= 4 && data.nick.length <= 50 ){
        callbackCorrect((prev)=>({
            ...prev,
            nick:true,
        }))
        callbackMessage((prev)=>({
            ...prev,
            nick:''
        }))
    }else if(data.nick.length > 50 ) {
        callbackCorrect((prev)=>({
            ...prev,
            nick:false,
        }))
        callbackMessage((prev)=>({
            ...prev,
            nick:'Your nick should have max 50 characters'
        }))
    } else{
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
    const selectDate = new Date(data.dateOfBirth)
    const currentDate = new Date()

    console.log(selectDate.getTime()>currentDate.getTime())


    if(data.dateOfBirth===''){
        callbackMessage((prev)=>({
            ...prev,
            dateOfBirth:''
        }))
    }else if(selectDate.getTime()>currentDate.getTime()){
        callbackMessage((prev)=>({
            ...prev,
            dateOfBirth:'Your date cannot be from the future'
        }))
        callbackCorrect((prev)=>({
            ...prev,
            dateOfBirth:false,
        }))
    }else{
        callbackMessage((prev)=>({
            ...prev,
            dateOfBirth:''
        }))
        callbackCorrect((prev)=>({
            ...prev,
            dateOfBirth:true,
        }))
    }
    // Sex...
    if(data.sex===''){
        callbackMessage((prev)=>({
            ...prev,
            sex:''
        }))

    }else if(data.sex === 'select'){
        callbackMessage((prev)=>({
            ...prev,
            sex:'Select your sex'
        }))
        callbackCorrect((prev)=>({
            ...prev,
            sex:false,
        }))
    }else if(optionsSexSelect.includes(data.sex.toString())){
        callbackMessage((prev)=>({
            ...prev,
            sex:''
        }))
        callbackCorrect((prev)=>({
            ...prev,
            sex:true,
        }))
    }else{
        callbackMessage((prev)=>({
            ...prev,
            sex:'Select your sex'
        }))
        callbackCorrect((prev)=>({
            ...prev,
            sex:false,
        }))
    }
    // Account public...
    if(data.accountPublic===''){
        callbackMessage((prev)=>({
            ...prev,
            accountPublic:''
        }))
    }else if(data.accountPublic==='select'){
        callbackMessage((prev)=>({
            ...prev,
            accountPublic:'Select your account options'
        }))
        callbackCorrect((prev)=>({
            ...prev,
            accountPublic:false,
        }))
    }else if(optionsAccountSelect.includes(data.accountPublic.toString())){
        callbackMessage((prev)=>({
            ...prev,
            accountPublic:''
        }))
        callbackCorrect((prev)=>({
            ...prev,
            accountPublic:true,
        }))
    }else{
        callbackMessage((prev)=>({
            ...prev,
            accountPublic:'Select your account options'
        }))
        callbackCorrect((prev)=>({
            ...prev,
            accountPublic:false,
        }))
    }
    // Province...
    if(data.province===''){
        callbackMessage((prev)=>({
            ...prev,
            province:''
        }))
    }else if(data.province==='select'){
        callbackMessage((prev)=>({
            ...prev,
            province:'Select your province'
        }))
        callbackCorrect((prev)=>({
            ...prev,
            province:false,
        }))
    }else if(optionsProvinceSelect.includes(data.province.toString())){
        callbackMessage((prev)=>({
            ...prev,
            province:''
        }))
        callbackCorrect((prev)=>({
            ...prev,
            province:true,
        }))
    }else{
        callbackMessage((prev)=>({
            ...prev,
            province:'Select your province'
        }))
        callbackCorrect((prev)=>({
            ...prev,
            province:false,
        }))
    }
    // Password...
    if(data.password1 === ''){
        callbackMessage((prev)=>({
            ...prev,
            password1:''
        }))
    }else if(data.password1.length < 8){
        callbackMessage((prev)=>({
            ...prev,
            password1:'Password must have min 8 characters'
        }))
        callbackCorrect((prev)=>({
            ...prev,
            password1:false,
        }))
    }else if(data.password1.length > 50){
        callbackMessage((prev)=>({
            ...prev,
            password1:'Password must have max 50 characters'
        }))
        callbackCorrect((prev)=>({
            ...prev,
            password1:false,
        }))
    }else{
        callbackMessage((prev)=>({
            ...prev,
            password1:''
        }))
        callbackCorrect((prev)=>({
            ...prev,
            password1:true,
        }))
    }

    if(data.password2 ===''){
        callbackMessage((prev)=>({
            ...prev,
            password2:''
        }))
    }else if(data.password1 !== data.password2){
        callbackMessage((prev)=>({
            ...prev,
            password2:'Passwords are not the same'
        }))
        callbackCorrect((prev)=>({
            ...prev,
            password2:false,
        }))
    }else{
        callbackMessage((prev)=>({
            ...prev,
            password2:''
        }))
        callbackCorrect((prev)=>({
            ...prev,
            password2:true,
        }))
    }
}
