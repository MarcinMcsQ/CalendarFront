import React, {ChangeEvent, ReactElement} from "react";
import "./TaskForm.scss"
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux-toolkit/store";
import {setDescription, setLocation, setTitle} from "../../redux-toolkit/features/task-form/task-form-slice"

export const TaskForm = () => {
    const dispatch = useDispatch();
    const {
        title,
        location,
        description,
        atMinute,
        atHour,
        taskType,
        important
    } = useSelector((store: RootState) => store.taskForm)



    const taskSubmitHandle = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        //@TODO fetch send task to server
        show()
    }

    const handleTitle = (e:ChangeEvent<HTMLInputElement>) => {
        dispatch(setTitle(e.target.value))
    };

    const handleLocation = (e:ChangeEvent<HTMLInputElement>) => {
        dispatch(setLocation(e.target.value))
    };

    const handleDescription = (e:ChangeEvent<HTMLInputElement>) => {
        dispatch(setDescription(e.target.value))

    };

    const show = ()=>{
        console.log(  title,
            location,
            description,
            atMinute,
            atHour,
            taskType,
            important)
    }
    return (
        <>
            <form onSubmit={taskSubmitHandle}>
                <input onChange={handleTitle} value={title} type="text" placeholder="title"/>
                <input onChange={handleLocation} value={location} type="text" placeholder="location"/>
                <input onChange={handleDescription} value={description} type="text" placeholder="description"/>
                <button type="submit">Send</button>
            </form>
        </>
    )
}
