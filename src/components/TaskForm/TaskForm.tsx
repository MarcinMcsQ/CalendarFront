import React, {ChangeEvent, Dispatch, ReactElement, useEffect, useState} from "react";
import "./TaskForm.scss"
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux-toolkit/store";
import {setDescription, setLocation, setTitle} from "../../redux-toolkit/features/task-form/task-form-slice"
import {TaskFormData,TaskCreateResponse, GetAllTasksResponse} from 'types'
import {fetchFunc} from "../../Services/utils/fetch";
import {CONFIG} from "../../config/config";
import {setHistory} from "../../redux-toolkit/features/task-history/task-history-slice";

interface Props{
    taskFormActive:boolean;
    setFormActive:Dispatch<boolean>;
    currentFormData:TaskFormData | undefined;
    setCurrentFormData:React.Dispatch<React.SetStateAction<TaskFormData>>
}

export const TaskForm = (props:Props) => {
    const dispatch = useDispatch();
    const taskHistory = useSelector((store:RootState) => store.taskHistory)
    const [addSuccess,setAddSuccess] = useState<boolean | null>(null)
    const {
        title,
        location,
        description,
        atMinute,
        atHour,
        taskType,
        important
    } = useSelector((store: RootState) => store.taskForm)


    const taskSendHandle = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(props.currentFormData)

        if(props.currentFormData){
            const addedTask = (await fetchFunc(CONFIG.domain, CONFIG.port, 'task', 'POST', props.currentFormData)) as TaskCreateResponse;
            setAddSuccess(()=>addedTask.success)
            if(addedTask.success){
                const res = (await fetchFunc(CONFIG.domain, CONFIG.port, 'task', 'GET', '')) as GetAllTasksResponse;
                dispatch(setHistory(res.tasks))
            }
        }

    }

    const handleTitle = (e:ChangeEvent<HTMLInputElement>) => {
        dispatch(setTitle(e.target.value))
        props.setCurrentFormData((prev)=>({
            ...prev,
            title:e.target.value,
        }))
    };

    const handleLocation = (e:ChangeEvent<HTMLInputElement>) => {
        dispatch(setLocation(e.target.value))
    };

    const handleDescription = (e:ChangeEvent<HTMLInputElement>) => {
        dispatch(setDescription(e.target.value))
        props.setCurrentFormData((prev)=>({
            ...prev,
            description:e.target.value
        }))

    };



    useEffect(()=>{
        console.log(props.currentFormData)
    },[props.taskFormActive, props.currentFormData])



    return (
        <>
            <form onSubmit={taskSendHandle}>
        {props.taskFormActive ? <div className='task-form'>
            { addSuccess === null ? null : (addSuccess?<h3>Task Added</h3> : <h3>Error task cant be added</h3>)}
                <input onChange={handleTitle} value={title} type="text" placeholder="title"/>
                <input onChange={handleLocation} value={location} type="text" placeholder="location"/>
                <input onChange={handleDescription} value={description} type="text" placeholder="description"/>

                <button type="submit">Send</button>
                <button onClick={()=>{props.setFormActive(false)}}>Cancel</button>
        </div>: null}</form>
        </>
    )
}
