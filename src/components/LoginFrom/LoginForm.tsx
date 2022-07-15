import React, {useContext, useEffect} from "react";
import {FormInputPart} from "../common/FormInputPart/FormInputPart";
import {useLoginForm} from "../../Services/utils/hooks/useLoginForm";
import {LoginResponse , GetAllTasksResponse , TaskFormData} from 'types'
import './LoginForm.scss'
import {fetchFunc} from "../../Services/utils/fetch";
import {CONFIG} from "../../config/config";
import {InformationBox} from "../common/InformationBox/InformationBox";
import {useNavigate} from "react-router-dom";
import {Context} from "../context/context";
import {useDispatch, useSelector} from "react-redux";
import {RootState, store} from "../../redux-toolkit/store";
import {setHistory, clearHistory} from "../../redux-toolkit/features/task-history/task-history-slice";



export const LoginForm = () => {
    const context = useContext(Context);
    const dispatch = useDispatch();
    const taskHistory = useSelector((store:RootState) => store.taskHistory)
    const navigate = useNavigate()
    const {message, correct, setCorrect, setMessage, loginFormData, setLoginFormData} = useLoginForm();

    const logIn = () => {
       context.userLogged.setLogged(()=>true)
    }

    const validationRes = async (res: boolean) => {
        if (!res) {
            setMessage((i) => ({loginMessage: 'Email or password incorrect'}));
            setCorrect((i) => ({loginData: false}));
        } else {
            setMessage((i) => ({loginMessage: ''}));
            setCorrect((i) => ({loginData: true}));
            const res = (await fetchFunc(CONFIG.domain, CONFIG.port, 'task', 'GET', '')) as GetAllTasksResponse;
            dispatch(setHistory(res.tasks))
            if(res.success) logIn();
        }
    }

    const sendLoginForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const res = (await fetchFunc(CONFIG.domain, CONFIG.port, 'auth/login', 'POST', loginFormData)) as LoginResponse;
        validationRes(res.success);
    }


    useEffect(()=>{
        if(context.userLogged.logged) navigate("/calendar")
    },[context.userLogged.logged])


    return (
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
                        placeholder={"email"}
                        helper={true}
                    />
                    <FormInputPart
                        name="password"
                        changeHandle={setLoginFormData}
                        value={loginFormData.password}
                        helpMessage={''}
                        correct={correct.loginData}
                        type={'password'}
                        placeholder={"password"}
                        helper={true}
                    />
                    <button className="login-form-box__button" type="submit">Login</button>
                </div>
                <InformationBox message={message.loginMessage} positive={correct.loginData}/>
            </form>

        </>
    )
}
