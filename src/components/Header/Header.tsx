import React from "react";
import {Link} from "react-router-dom";

export const Header = () => (
    <>
        <div className="header">
            <h1>Calendar </h1>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </div>
    </>
)

