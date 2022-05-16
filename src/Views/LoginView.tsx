import React from "react";
import {LoginForm} from "../components/LoginFrom/LoginForm";
import {Header} from "../components/common/Header/Header";
import {Footer} from "../components/common/Footer/Footer";

export const LoginView = () => (
    <>
        <Header/>
        <LoginForm/>
        <Footer/>
    </>
)
