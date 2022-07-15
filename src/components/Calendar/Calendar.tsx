import React, {useEffect, useState} from "react";
import {TaskForm} from "../TaskForm/TaskForm";
import {TaskFormData} from 'types'
import './Calendar.scss'
import {Day} from "../Day/Day";
import {DayBlank} from "../Day/DayBlank";
import {useSelector} from "react-redux";
import {RootState} from "../../redux-toolkit/store";

interface Props {
    showedDate: number;
    tasks: string;
}

export const Calendar = (props: Props) => {
    const [tasks] = useState(props.tasks);
    const [taskFormActive,setTaskFormActive] = useState<boolean>(false);
    const [currentFormData, setCurrentFormData] = useState<TaskFormData>({}as TaskFormData)

    const taskHistory = useSelector((store:RootState) => store.taskHistory)

    const firstDay = new Date()
    firstDay.setDate(firstDay.getDate() - firstDay.getDate()+1)
    const now = new Date();
    const countDaysInMonth =  new Date(now.getFullYear(), now.getMonth()+1, 0).getDate();

    const days = []

    for (let j = 0; j < firstDay.getDay()-1; j++) {
        days.push(
            <DayBlank key={j+1000} />
        )
    }
    for (let i = 1; i <= countDaysInMonth ; i++) {
        const dayDate = new Date(now.getFullYear(),now.getMonth(),i)
        days.push(
            <Day
                key={i}
                number={i}
                now={now.getDate() === i}
                date={dayDate.toString()}
                tasks={tasks}
                setFormActive={setTaskFormActive}
                setCurrentFormData={setCurrentFormData}
            />
        )
    }

    useEffect(()=>{
    },[taskFormActive, taskHistory])

    return (
        <div className="calendar">
            {days}
            <TaskForm taskFormActive={taskFormActive} setFormActive={setTaskFormActive} currentFormData={currentFormData} setCurrentFormData={setCurrentFormData}/>
        </div>
    )
}
