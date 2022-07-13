import {createSlice} from "@reduxjs/toolkit";
import {taskType, TaskTypeDb, TaskFormData} from "types";


const initialState = {
    id: null,
    date: '',
    location: '',
    title: '',
    taskType: taskType.other,
    important: false,
    description: '',
    atHour:null,
    atMinute:null,
} as TaskFormData

interface SetId {
    payload: null | string
}
interface SetDate {
    payload: string
}
interface SetLocation {
    payload: string
}
interface SetTitle {
    payload: string
}
interface SetTaskType {
    payload: TaskTypeDb
}
interface SetImportant {
    payload: boolean
}
interface SetDescription {
    payload: string
}
interface SetAtHour {
    payload: null | number
}
interface SetAtMinute {
    payload: null | number
}
export const taskFormSlice = createSlice({
    name:'taskForm',
    initialState,
    reducers:{
        setId:(state,action:SetId) =>{
            state.id = action.payload
        },
        setDate:(state,action:SetDate) =>{
            state.date = action.payload
        },
        setLocation:(state,action:SetLocation) =>{
            state.location = action.payload
        },
        setTitle:(state,action:SetTitle) =>{
            state.title = action.payload
        },
        setTaskType:(state,action:SetTaskType) =>{
            state.taskType = action.payload
        },
        setImportant:(state,action:SetImportant) =>{
            state.important = action.payload
        },
        setDescription:(state,action:SetDescription) =>{
            state.description = action.payload
        },
        setAtHour:(state,action:SetAtHour) =>{
            state.atHour = action.payload
        },
        setAtMinute:(state,action:SetAtMinute) =>{
            state.atMinute = action.payload
        }
    }
})

export const {
    setId,
    setDate,
    setLocation,
    setTitle,
    setTaskType,
    setImportant,
    setDescription,
    setAtHour,
    setAtMinute
} = taskFormSlice.actions;

