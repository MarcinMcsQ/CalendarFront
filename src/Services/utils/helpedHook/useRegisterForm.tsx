import React, {useEffect, useState} from "react";
import {RegisterFormUserData} from "types";

export const useRegisterForm = (validateCallback: (value: boolean | string | number) => {errorMessage:string,correct:boolean}) =>
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
        accountPublic: false,
        password1: '',
        password2: ''
    })


    const changedHandle = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        return setRegisterFormData((registerParams: RegisterFormUserData) => ({
            ...registerParams,
            [e.target.name]: e.target.value,
        }));
    };

    return {
        helpMessage: message,
        correct: correct,
        registerFormData: registerFormData,
        setRegisterFormData: changedHandle
    }
}
