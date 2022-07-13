import React, {useContext} from "react";
import {Link, useNavigate} from "react-router-dom";
import "./Header.scss"
import {Context} from "../../context/context";
import {fetchFunc} from "../../../Services/utils/fetch";
import {CONFIG} from "../../../config/config";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../redux-toolkit/store";
import {clearHistory} from "../../../redux-toolkit/features/task-history/task-history-slice";


export const Header = () => {
    const context = useContext(Context);
    const dispatch = useDispatch();
    const taskHistory = useSelector((store:RootState) => store.taskHistory)
    const navigate = useNavigate()


    const logOut = async () => {
        const res = (await fetchFunc(CONFIG.domain,CONFIG.port,'auth/logout','GET' , ''));
        dispatch(clearHistory([]))
        context.userLogged.setLogged(false)
        navigate("/")
    }

    return ( context.userLogged.logged ?
            <div className="header">
                <Link to="/"><h1>Calendar </h1></Link>
                <div className="header__button-box">
                    <Link to="/calendar">Calendar</Link>
                    <Link to="/map">Map</Link>
                    <button onClick={logOut}>Log-out</button>
                </div>
            </div>
            :
            <div className="header">
                <Link to="/"><h1>Calendar </h1></Link>
                <div className="header__button-box">
                    <Link to="/register">Register</Link>
                    <Link to="/login">log in</Link>
                </div>
            </div>
    )
}
