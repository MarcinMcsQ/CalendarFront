import React from "react";
import "./RegisterForm.scss"
import {FormInputPart} from "../common/FormInputPart/FormInputPart";
import {useRegisterForm} from "../../Services/utils/hooks/useRegisterForm";
import {FormSelectPart} from "../common/FormSelectPart/FormSelectPart";
import {validateRegisterRule} from "./ValidateRegisterRule";
import {fetchFunc} from "../../Services/utils/fetch";
import {optionsAccountSelect, optionsProvinceSelect, optionsSexSelect} from "types";



export const RegisterForm = () => {
    const {helpMessage, correct, registerFormData, setRegisterFormData} = useRegisterForm(validateRegisterRule) ;

    const checkCorrectForm = ():boolean =>{
        const arrCorrect = Object.entries(correct)
        arrCorrect.forEach((item)=>{
            if(!item[1]){
                return false;
            }
        })
       return true
    }

    const sendRegisterForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(checkCorrectForm()){
            // const res = fetchFunc("POST","register",registerFormData)
                //@TODO add info after register successfully
        }else{
            //@TODO writing code responsible for incorrect data in register form
        }
    };

    return (
        <>
            <form className="register-form" onSubmit={sendRegisterForm}>
                <h2>Register form</h2>
                <div className="register-form__box">
                    <FormInputPart
                        name="nick"
                        changeHandle={setRegisterFormData}
                        value={registerFormData.nick}
                        helpMessage={helpMessage.nick}
                        correct={correct.nick}
                        type={'text'}
                        placeholder={"Your name in application"}/>
                    <FormInputPart
                        name="name"
                        changeHandle={setRegisterFormData}
                        value={registerFormData.name}
                        helpMessage={helpMessage.name}
                        correct={correct.name}
                        type={'text'}
                        placeholder={'Your real name'}/>
                    <FormInputPart
                        name="email"
                        changeHandle={setRegisterFormData}
                        value={registerFormData.email}
                        helpMessage={helpMessage.email}
                        correct={correct.email}
                        type={'text'}
                        placeholder={"Your email"}/>
                    <FormInputPart
                        name="dateOfBirth"
                        changeHandle={setRegisterFormData}
                        value={registerFormData.dateOfBirth}
                        helpMessage={helpMessage.dateOfBirth}
                        correct={correct.dateOfBirth}
                        type={'date'}
                        placeholder={"Your name in application"}/>
                    <FormSelectPart
                        name={'sex'}
                        options={optionsSexSelect}
                        changeHandle={setRegisterFormData}
                        value={registerFormData.sex}
                        helpMessage={helpMessage.sex}
                        correct={correct.sex}
                        placeholder={"Select sex:"}
                    />
                    <FormSelectPart
                        name={'accountPublic'}
                        options={optionsAccountSelect}
                        changeHandle={setRegisterFormData}
                        value={registerFormData.accountPublic}
                        helpMessage={helpMessage.accountPublic}
                        correct={correct.accountPublic}
                        placeholder={"Select account options:"}
                    />
                    <FormSelectPart
                        name={'province'}
                        options={optionsProvinceSelect}
                        changeHandle={setRegisterFormData}
                        value={registerFormData.province}
                        helpMessage={helpMessage.province}
                        correct={correct.province}
                        placeholder={"Select province:"}
                    />

                    <FormInputPart
                        name="password1"
                        changeHandle={setRegisterFormData}
                        value={registerFormData.password1}
                        helpMessage={helpMessage.password1}
                        correct={correct.password1}
                        type={'password'}
                        placeholder={'Password'}/>
                    <FormInputPart
                        name="password2"
                        changeHandle={setRegisterFormData}
                        value={registerFormData.password2}
                        helpMessage={helpMessage.password2}
                        correct={correct.password2}
                        type={'password'}
                        placeholder={"Repeat password"}/>
                    <button className="register-form-box__button" type="submit">Register</button>
                </div>
            </form>

        </>
    )
}

