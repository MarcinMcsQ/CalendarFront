import React from "react";
import {SelectOptions} from "../SelectOptions/SelectOptions";
import {Calendar} from "../Calendar/Calendar";
import {CalendarNavigate} from "../CalendarNavigate/CalendarNavigate";



enum taskType {
    work="work",
    friends="friends family",
    development="personal development",
    health = "health and sport",
    hobby= "hobby",
    other="other"
}

interface taskDataInterface {
    id:number;
    date:string;
    place:string;
    title: string;
    taskType: taskType.work|taskType.friends|taskType.development|taskType.health|taskType.hobby|taskType.other;
    important: boolean;
    description:string;
    time:number;
}


const exampleData:taskDataInterface[] = [
    {
        id:1,
        date:'',
        place:'',
        title: "Zakupy",
        taskType: taskType.other,
        important: false,
        description:"Kupić coś na kolacje",
        time:60,
    },

]


export const CalendarMain = () =>{


    //@@@@@@@@@@ functions for creating a calendar based on a date @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    const dateCurrent = new Date()
    //returning the number of days in a month
    const date = new Date(dateCurrent.getFullYear(),dateCurrent.getMonth()-3,0).getDate()
    console.log(date)
    console.log(dateCurrent.getMonth())
    // console.log(date)
    // console.log(date.getMonth())
    // console.log(date.getDate())
    // console.log(date.toLocaleDateString().split('.').map(item=>Number(item)))
    // console.log(date.getDay())
    //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


    return(
        <>
            <div className="calendar-main">
                <CalendarNavigate/>
                <Calendar/>
                <SelectOptions/>
            </div>
        </>
    )

}
