import React, {createContext, Dispatch} from "react";
import { TaskType,taskType } from "types";

interface ContextType {
    currentDate:{
        currentDate:Date ;
        setCurrentDate:Dispatch<React.SetStateAction<Date>> ;
    },
    taskType:{
        showedTypeOfTask:TaskType ;
        setShowedTypeOfTask:Dispatch<React.SetStateAction<TaskType>> ;
    },
    userLogged:{
        logged:boolean ;
        setLogged: Dispatch<React.SetStateAction<boolean>> ;
    }
}

export const Context = createContext<ContextType>({
    currentDate:{
        currentDate:new Date() ,
        setCurrentDate:()=>{}
    },
    taskType:{
        showedTypeOfTask:taskType.all ,
        setShowedTypeOfTask:()=>{},
    },
    userLogged:{
        logged:false,
        setLogged:()=>{},
    }
})



// const {currentDate, setCurrentDate} = useContext(contextCurrentDate)
// const {showedTypeOfTask,setShowedTypeOfTask} = useContext(contextShowedTypeOfTask)

// export const context = {
//     currentDate,
//     setCurrentDate,
//     showedTypeOfTask,
//     setShowedTypeOfTask
// }
// export const Context = createContext(context)


// tym opakowujemy komponenty które mają miec dostę p do kontekstu
// <Context.Provider></Context.Provider value=null>


// const context = useContext(Context);
//
// if(!context) return null
//
// const {} = context;
