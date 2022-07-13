import React from "react";
import "./FormSelectPart.scss"
import {OptionsAccountSelect,OptionsSexSelect ,OptionsProvinceSelect} from 'types'

type Props = {
    value: '' | 'select' | OptionsSexSelect  | OptionsProvinceSelect | OptionsAccountSelect;
    name: string;
    options: string[];
    changeHandle: React.ChangeEventHandler<HTMLSelectElement>
    helpMessage: string;
    correct: boolean;
    placeholder: string;
}

export const FormSelectPart = (props: Props) => {

    const options = [<option key="-1" value="select">select...</option>]

    for (let i = 0; i < props.options.length; i++) {
        options.push(<option key={i} value={props.options[i]}>{props.options[i]}</option>);
    }
    return (
        <div className={`form-select-part ${ props.value !== '' ?
            (props.correct ? "form-select-part--correct" : "form-select-part--incorrect") : ""}`}>

            <div className="form-select-part__box">
                <p className="form-select-part-box__p">{props.placeholder}</p>
                <select className="form-select-part-box__select" name={props.name}
                        onChange={props.changeHandle}>{options}</select>
            </div>
            <p className="form-select-part__p">{props.helpMessage}</p>
        </div>
    )
}
