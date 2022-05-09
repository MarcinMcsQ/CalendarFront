import React from "react";
import "./FormInputPart.scss"

type Props = {
    name:string;
    changeHandle:React.ChangeEventHandler<HTMLInputElement>;
    placeholder:string;
}

export const FormInputPart = (props:Props) => {

    return (
        <div className="form-input-part">
            <input type="text" placeholder={props.placeholder}/>
            <p className="form-input-part">{"Message helper"}</p>
        </div>
    )
}
