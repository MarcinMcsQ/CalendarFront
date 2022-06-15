import React from "react";
import {FormInputPart} from "../common/FormInputPart/FormInputPart";
import {useLoginForm} from "../../Services/utils/hooks/useLoginForm";
import './LoginForm.scss'

export const LoginForm = () => {

    const {helpMessage, correct,setMessage, loginFormData, setLoginFormData} = useLoginForm();

    const sendLoginForm = () =>{
        //@TODO implement send loginForm data
    }

    return(
        <>
            <form className="login-form" onSubmit={sendLoginForm}>
                <h2>Login form</h2>
                <div className="login-form__box">
                    <FormInputPart
                        name="email"
                        changeHandle={setLoginFormData}
                        value={loginFormData.email}
                        helpMessage={''}
                        correct={correct.loginData}
                        type={'text'}
                        placeholder={"email"}/>
                    <FormInputPart
                        name="password"
                        changeHandle={setLoginFormData}
                        value={loginFormData.password}
                        helpMessage={''}
                        correct={correct.loginData}
                        type={'password'}
                        placeholder={"password"}/>
                    <button className="login-form-box__button" type="submit">Login</button>
                </div>
            </form>
        </>
    )
}
