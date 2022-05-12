import React, {useEffect, useState} from "react";
import {RegisterFormUserData} from "types";
import {validateRegisterRule} from "../../../components/RegisterForm/ValidateRegisterRule";

export const useRegisterForm = (validateCallback: (data: RegisterFormUserData, callbackCorrect: any, callbackMessage: any) => void) =>
{
    const [message, setMessage] = useState({
        nick: '',
        name: '',
        email: '',
        dateOfBirth: '',
        sex: '',
        province: '',
        accountPublic: '',
        password1: '',
        password2: ''
    })
    const [correct, setCorrect] = useState({
        nick: false,
        name: false,
        email: false,
        dateOfBirth: false,
        sex: false,
        province: false,
        accountPublic: false,
        password1: false,
        password2: false
    })
    const [registerFormData, setRegisterFormData] = useState<RegisterFormUserData>({
        nick: '',
        name: '',
        email: '',
        dateOfBirth: '',
        sex: '',
        province: '',
        accountPublic: '',
        password1: '',
        password2: ''
    })


    const changedHandle = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        return setRegisterFormData((registerParams: RegisterFormUserData) => ({
            ...registerParams,
            [e.target.name]: e.target.value,
        }));
    };

    validateRegisterRule(registerFormData , setCorrect , setMessage  )
    return {
        helpMessage: message,
        correct: correct,
        registerFormData: registerFormData,
        setRegisterFormData: changedHandle
    }
}
