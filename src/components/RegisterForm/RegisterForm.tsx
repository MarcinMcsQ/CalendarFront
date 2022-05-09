import React, {useState} from "react";
import "./RegisterForm.scss"
import {FormInputPart} from "../FormInputPart/FormInputPart";
import {RegisterFormUserData} from "types";



export const RegisterForm = () => {
    const [registerFormData,setRegisterFormData] = useState<RegisterFormUserData>({
        nick:'',
        name:'',
        email:'',
        dateOfBirth:'',
        sex:'',
        province:'',
        account:'',
        password1:'',
        password2:''
    })

    const changedHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
        return setRegisterFormData((registerParams:RegisterFormUserData) => ({
            ...registerParams,
            [e.target.name]: e.target.value,
        }));
    };

    const sendRegisterForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };


    return(
        <>
            <form onSubmit={sendRegisterForm}>
                <div className="register-form">
                    <FormInputPart name="nick" changeHandle={changedHandle} placeholder={"Your name in application"} />
                    <FormInputPart name="name" changeHandle={changedHandle} placeholder={'Your real name'} />
                    <FormInputPart name="email" changeHandle={changedHandle} placeholder={"Your email"} />
                </div>
            </form>

        </>
    )
}

