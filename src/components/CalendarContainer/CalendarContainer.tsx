//@@@@@@@@@@ functions for creating a calendar based on a date @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
import React, {useContext, useEffect, useState} from "react";
import {SelectOptions} from "../SelectOptions/SelectOptions";
import {Calendar} from "../Calendar/Calendar";
import {CalendarNavigate} from "../CalendarNavigate/CalendarNavigate";
import {taskType, TaskType, TaskFormData} from 'types'
import './CalendarContainer.scss'
import {Context} from "../context/context";
import {useSelector} from "react-redux";
import {RootState} from "../../redux-toolkit/store";
import {useNavigate} from "react-router-dom";

const dateCurrent = new Date()
//returning the number of days in a month
const date = new Date(dateCurrent.getFullYear(), dateCurrent.getMonth() - 3, 0).getDate()

export const CalendarContainer = () => {

    const context = useContext(Context)
    const taskHistory = useSelector((store:RootState) => store.taskHistory)
    const navigate = useNavigate()

    const [showedDate, setShowedDate] = useState<number>(context.currentDate.currentDate.getDate())
    const [showedTypeOfTask, setShowedTypeOfTask] = useState<taskType>(taskType.all)
    const [currentTasks, setCurrentTasks] = useState<TaskFormData[]>(taskHistory.history)

    const taskFilter = (type:TaskType) => {
        const selectTasks = taskHistory.history.filter((item) => {
            if(type === 'all') return true;
            return item.taskType === type;
        })
        setCurrentTasks(()=>selectTasks)
    }

    useEffect(() => {
        taskFilter(showedTypeOfTask);
        if(!context.userLogged.logged) navigate("/login")
    }, [showedTypeOfTask , context.userLogged.logged])

    return (
        <>
            <div className="calendar-main">
                <CalendarNavigate showedDate={showedDate} setShowedDate={setShowedDate}/>
                <Calendar showedDate={showedDate} tasks={JSON.stringify(currentTasks)}/>
                <SelectOptions/>
            </div>
        </>
    )

}
