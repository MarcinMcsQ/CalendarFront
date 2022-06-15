import React, {useState} from "react";
import {LoginFormData} from "types"

export const useLoginForm = () => {

    const [message,setMessage] = useState({
        loginMessage:'',
    })

    const [correct, setCorrect] = useState({
       loginData:null,
    })
    const [loginFormData,setLoginFormData] = useState({
        email:'',
        password:'',
    })

    const changedHandle = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        return setLoginFormData((loginParams: LoginFormData) => ({
            ...loginParams,
            [e.target.name]: e.target.value,
        }));
    };

    return {
        helpMessage:message,
        setMessage,
        loginFormData,
        correct,
        setCorrect,
        setLoginFormData: changedHandle
    }
}
