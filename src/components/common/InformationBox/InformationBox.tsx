import React from "react";
import './InformationBox.scss'

interface Props{
    message:string;
    positive:boolean | null;
}
export const InformationBox = (props:Props) => {


    return(
        props.positive === null ? null :
          <div className='information-box' style={{border:`2px solid ${props.positive ? 'green' : 'red'}`}}>
                <p>{props.message}</p>
          </div>
    )
}
