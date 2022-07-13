import {createSlice} from "@reduxjs/toolkit";
import {TaskFormData} from "types";



interface SetTaskHistory {
    payload: TaskFormData[];
}
interface ClearTaskHistory {
    payload: [];
}

export const taskHistorySlice = createSlice({
    name:'taskHistory',
    initialState:  {history:[] as TaskFormData[]}  ,
    reducers:{
        setHistory:(state,action:SetTaskHistory) =>{
            state.history = action.payload
        },
        clearHistory: (state,action: ClearTaskHistory) =>{
            state.history = action.payload;
        },
    }
})

export const {setHistory,clearHistory} = taskHistorySlice.actions;
