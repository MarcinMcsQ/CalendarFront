import React from "react";
import {TaskForm} from "../TaskForm/TaskForm";

interface Props{
    showedDate:number
}

export const Calendar = (props:Props) =>{
    return(
        <>
            <TaskForm/>
        </>
    )
}
