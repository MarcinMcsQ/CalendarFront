import React, {useEffect, useState} from "react";
import "./RegisterForm.scss"
import {FormInputPart} from "../common/FormInputPart/FormInputPart";
import {useRegisterForm} from "../../Services/utils/hooks/useRegisterForm";
import {FormSelectPart} from "../common/FormSelectPart/FormSelectPart";
import {validateRegisterRule} from "./ValidateRegisterRule";
import {fetchFunc} from "../../Services/utils/fetch";
import {optionsAccountSelect, optionsProvinceSelect, optionsSexSelect, RegisterResponse} from "types";
import {CONFIG} from "../../config/config";
import {InformationBox} from "../common/InformationBox/InformationBox";


export const RegisterForm = () => {
    const {helpMessage, correct, registerFormData, setRegisterFormData} = useRegisterForm(validateRegisterRule);
    const [resCode, setResCode] = useState<null | boolean>(null);
    const [ownCode, setOwnCode] = useState<null | boolean>(null)

    const checkCorrectForm = (): boolean => {
        const arrCorrect = Object.entries(correct)
        for (let i = 0; i < arrCorrect.length; i++) {
            if (!arrCorrect[i][1]) {
                return false;
            }
        }
        return true
    }

    const sendRegisterForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (checkCorrectForm()) {
            const res = (await fetchFunc(CONFIG.domain, CONFIG.port, 'user/register', 'POST', registerFormData)) as RegisterResponse;
            setResCode(() => res.success);
            setOwnCode(()=>null)
        } else {
           setOwnCode(()=>true)
        }
    };

    useEffect(() => {

    }, [resCode])

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
                    {ownCode === true ? <InformationBox message={'Check your form'} positive={false}/> : null}
                    {resCode ? <InformationBox message={'Register success'} positive={true}/>
                        : <InformationBox message={'Email exist'} positive={resCode}/>}
                    <button className="register-form-box__button" type="submit">Register</button>
                </div>
            </form>

        </>
    )
}

