import React, {Dispatch, useState} from "react";
import "./Day.scss"
import {Task} from "../Task/Task";
import {TaskFormData} from 'types'
import {useSelector} from "react-redux";
import {RootState} from "../../redux-toolkit/store";


interface Props {
    key: number;
    number: number;
    now: boolean;
    date:string;
    tasks:string
    setFormActive:Dispatch<boolean>;
    setCurrentFormData:Dispatch<TaskFormData>
}

export const Day = (props: Props) => {

    const [tasks] = useState(JSON.parse(props.tasks) )
    const dayDate = new Date(props.date)
    const date = new Date(props.date)
    const {title, description} = useSelector((store: RootState) => store.taskForm)

    const strDate = `${date.getFullYear()}-${(date.getMonth()+1)<10 ? '0'+(date.getMonth()+1) : (date.getMonth()+1)}-${date.getDate()<10 ? '0'+date.getDate() : date.getDate()}`

    const dayTask = [] as any

    for (let i = 0; i < tasks.length ; i++) {
        if(tasks[i].date == strDate ){
            dayTask.push(<Task key={i} task={JSON.stringify(tasks[i])}/>)
        }
    }

    const addTaskHandler = ()=>{
        props.setFormActive(true)
        props.setCurrentFormData({
            date:strDate,
            title:title,
            description:description
        })
    }

    return(
        <>
            <div className={`custom ${props.now ? 'current-day' : 'day'}  ${dayDate.getDay()===0 ? 'sun' : ''}`}>
                <p className='day__p-date'>{dayDate.getDate()}</p>
                {dayTask}
                <button onClick={addTaskHandler} className="day__button">+</button>
            </div>
        </>
    )
}



