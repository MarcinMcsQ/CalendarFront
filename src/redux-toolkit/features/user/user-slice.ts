import {createSlice} from "@reduxjs/toolkit";

export interface UserInterface {
    name:string;
}

const initialState={
    name:'' ,
}

export interface SetUserName {
    payload: string;
}

export interface ClearUser {
    payload: UserInterface;
}

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setName:(state,action:SetUserName) =>{
            state.name = action.payload;
        },
        clearUser:(state,action:ClearUser) =>{
            state = initialState;
        },

    }
})

export const {setName, clearUser} = userSlice.actions
