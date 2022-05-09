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
        accountPublic:false,
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
            <form className="register-form" onSubmit={sendRegisterForm}>
                <div className="register-form__box">
                    <FormInputPart name="nick" changeHandle={changedHandle} placeholder={"Your name in application"} />
                    <FormInputPart name="name" changeHandle={changedHandle} placeholder={'Your real name'} />
                    <FormInputPart name="email" changeHandle={changedHandle} placeholder={"Your email"} />
                    <FormInputPart name="dataOfBirth" changeHandle={changedHandle} placeholder={"Your name in application"} />
                    <FormInputPart name="sex" changeHandle={changedHandle} placeholder={'Your real name'} />

                    <FormInputPart name="province" changeHandle={changedHandle} placeholder={"Your email"} />

                    <FormInputPart name="accountPublic" changeHandle={changedHandle} placeholder={"Your name in application"} />
                    <FormInputPart name="password1" changeHandle={changedHandle} placeholder={'Your real name'} />
                    <FormInputPart name="password2" changeHandle={changedHandle} placeholder={"Your email"} />

                    <button className="register-form-box__button" type="submit">Register</button>
                </div>
            </form>

        </>
    )
}

