import React, {useState} from "react";
import {LoginFormData} from "types"
import {isBoolean} from "util";

export const useLoginForm = () => {

    const [message,setMessage] = useState({
        loginMessage:'',
    })

    const [correct, setCorrect] = useState<{loginData:null | boolean}>({
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
        message,
        setMessage,
        loginFormData,
        correct,
        setCorrect,
        setLoginFormData: changedHandle
    }
}

