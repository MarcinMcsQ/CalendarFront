import {configureStore} from "@reduxjs/toolkit";
import {taskFormSlice} from "../features/task-form/task-form-slice";
import {taskHistorySlice} from "../features/task-history/task-history-slice";
import {userSlice} from "../features/user/user-slice";

export const store = configureStore({
    reducer:{
        taskForm:taskFormSlice.reducer,
        taskHistory:taskHistorySlice.reducer,
        user:userSlice.reducer,
    }
})

export type RootState =  ReturnType<typeof store.getState>


