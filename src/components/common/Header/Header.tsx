import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import "./Header.scss"

let user = false

export const Header = () => {
    const navigate = useNavigate()

    // const [user, setUser] = useState<boolean>(false)

    const logOut = () => {
        //@TODO fetch logout to server
        // setUser(state => !state)
        user = false;
        navigate("/")
    }

    //help function
    const logIn = () => {
        // setUser(state => !state)
        user = true;
        navigate("/calendar")

    }

    return (user ?
            <div className="header">

                <h1>Calendar </h1>
                <div className="header__button-box">
                    <Link to="/calendar">Calendar</Link>
                    <Link to="/map">Map</Link>
                    <button onClick={() => logOut()}>Log out</button>
                </div>
            </div>
            :
            <div className="header">
                <h1>Calendar </h1>
                <div className="header__button-box">
                    <Link to="/register">Register</Link>
                    <Link to="/login">log in</Link>
                    <button onClick={() => logIn()}>log in</button>
                </div>
            </div>
    )
}
