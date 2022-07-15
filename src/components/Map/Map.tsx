import React, {useContext, useEffect} from "react";
import {Context} from "../context/context";
import {useSelector} from "react-redux";
import {RootState} from "../../redux-toolkit/store";
import {useNavigate} from "react-router-dom";

export const Map = () => {
    const context = useContext(Context)
    const navigate = useNavigate()


    useEffect(() => {
        if(!context.userLogged.logged) navigate("/login")
    }, [context.taskType.showedTypeOfTask , context.userLogged.logged])
    return(
        <>
        </>
    )
}
