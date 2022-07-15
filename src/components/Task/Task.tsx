import React, {useState} from "react";
import {TaskFormData} from 'types'
import './Task.scss'

interface Props {
    task: string;
}
export const Task = (props:Props) => {
    const [task] = useState(JSON.parse(props.task)as TaskFormData)

    const removeTask = ()=>{

    }

    return (
        <div className='task'>
            <p>{task.title}</p>
            <button onClick={removeTask} className="task__remove-btn">X</button>
        </div>
    )
}
