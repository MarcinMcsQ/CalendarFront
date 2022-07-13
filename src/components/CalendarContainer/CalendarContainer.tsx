//@@@@@@@@@@ functions for creating a calendar based on a date @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
import React, {useContext, useEffect, useState} from "react";
import {SelectOptions} from "../SelectOptions/SelectOptions";
import {Calendar} from "../Calendar/Calendar";
import {CalendarNavigate} from "../CalendarNavigate/CalendarNavigate";
import {taskType} from 'types'
import './CalendarContainer.scss'
import {Context} from "../context/context";
import {useSelector} from "react-redux";
import {RootState} from "../../redux-toolkit/store";

const dateCurrent = new Date()
//returning the number of days in a month
const date = new Date(dateCurrent.getFullYear(), dateCurrent.getMonth() - 3, 0).getDate()
// console.log(date)
// console.log(dateCurrent.getMonth())
// console.log(date)
// console.log(date.getMonth())
// console.log(date.getDate())
// console.log(date.toLocaleDateString().split('.').map(item=>Number(item)))
// console.log(date.getDay())
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

//informacje jakie dostaje kalendarz
//- sprawdza czy zalogowany
//- jeśli NIE odsyła do formularza logowania
//- jeśli TAK odsyła obiekt z aktualną datą i danymi zadan urzytkownika

//zadnie frontu
//-zbudować po aktualnej dacie struktóre kalendarza danego miesiąca
//-powpisywać taki to poszczegulnych dni





// const exampleData: taskDataInterface[] = [
//     {
//         id: 1,
//         date: '',
//         location: '',
//         title: "Zakupy",
//         taskType: taskType.other,
//         important: false,
//         description: "Kupić coś na kolacje",
//         time: 60,
//     },
//
// ]


export const CalendarContainer = () => {

    const context = useContext(Context)
    const taskHistory = useSelector((store:RootState) => store.taskHistory)


    const [showedDate, setShowedDate] = useState<number>(context.currentDate.currentDate.getMonth())
    const [showedTypeOfTask, setShowedTypeOfTask] = useState<taskType>(taskType.all)


    useEffect(() => {
        //@TODO fetch pobranie obecnej daty
        //i przypisanie jej do contextu curren Date
        // context.setCurrentDate(res)

        //@TODO fetch pobranie taków zalogowanego urzytkownika
    }, [])

    return (
        <>
            <div className="calendar-main">
                <CalendarNavigate showedDate={showedDate} setShowedDate={setShowedDate}/>
                <Calendar showedDate={showedDate}/>
                <SelectOptions/>
            </div>
        </>
    )

}
