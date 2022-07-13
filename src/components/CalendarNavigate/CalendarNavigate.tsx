import React, {Dispatch, SetStateAction, useContext, useEffect} from "react";
import "./CalendarNavigate.scss"
import {Context} from "../context/context";

interface Props {
    showedDate: number;
    setShowedDate: Dispatch<SetStateAction<number>>;
}

export const CalendarNavigate = (props: Props) => {
    const context = useContext(Context);
    if(context === null) return null;
    const {showedDate, setShowedDate} = props;

    const upHandled = () => {
        console.log("up")
        setShowedDate((cur) => cur + 1)
    }
    const currentHandled = () => {
        console.log("current")
        setShowedDate(context.currentDate.currentDate.getMonth())
    }
    const downHandled = () => {
        console.log("down")
        setShowedDate((cur) => cur - 1)
    }

    // useEffect(() => {
    // }, [showedDate])

    return (
        <>
            <div className="calendar-navigate">
                <button onClick={upHandled} className="calendar-navigate__button-up">⇧</button>
                <button onClick={currentHandled} className="calendar-navigate__button-current">Current Month</button>
                <button onClick={downHandled} className="calendar-navigate__button-down">⇩</button>
            </div>
        </>
    )
}
