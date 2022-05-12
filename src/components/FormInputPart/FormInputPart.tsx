import React from "react";
import "./FormInputPart.scss"

type Props = {
    name: string;
    changeHandle: React.ChangeEventHandler<HTMLInputElement>;
    value: string | boolean;
    type: string;
    helpMessage: string;
    placeholder: string;
    correct: boolean;
}

export const FormInputPart = (props: Props) => {


    return (
        <div className="form-input-part"
             style={props.value ?
                 (props.correct ? {backgroundColor: 'green'} : {backgroundColor: 'red'})
                                : {backgroundColor: "transparent"}}>
            <input
                name={props.name}
                onChange={props.changeHandle}
                type={props.type}
                placeholder={props.placeholder}
                value={String(props.value)}/>
            <p className="form-input-part">{props.helpMessage}</p>
        </div>
    )
}
