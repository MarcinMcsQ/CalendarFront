import React, {createContext} from "react";
import { TaskType,taskType } from "types";

interface ContextType {
    currentDate:{
        currentDate:Date ;
        setCurrentDate:(date:Date)=>void;
    },
    taskType:{
        showedTypeOfTask:TaskType ;
        setShowedTypeOfTask:(taskType:TaskType)=>void;
    },
    userLogged:{
        logged:boolean ;
        setLogged:(logged:boolean)=>void;
    }
}

export const Context = createContext<ContextType>({
    currentDate:{
        currentDate:new Date() ,
        setCurrentDate:(date:Date)=>{}
    },
    taskType:{
        showedTypeOfTask:taskType.all ,
        setShowedTypeOfTask:(taskType:TaskType)=>{},
    },
    userLogged:{
        logged:false,
        setLogged:(logged:boolean)=>{},
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
