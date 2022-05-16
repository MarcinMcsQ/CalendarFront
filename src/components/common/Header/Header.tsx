import React from "react";
import {Link} from "react-router-dom";
import "./Header.scss"

export const Header = () => (
    <>
        <div className="header">
            <h1>Calendar </h1>
            <div className="header__button-box">
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </div>
        </div>
    </>
)

