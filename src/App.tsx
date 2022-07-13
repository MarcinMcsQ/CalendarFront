import React, {createContext, useContext, useState} from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {HomeView} from "./Views/HomeView";
import {LoginView} from "./Views/LoginView";
import {RegisterView} from "./Views/RegisterView";
import {CalendarView} from "./Views/CalendarView";
import {MapView} from "./Views/MapView";
import {Provider} from "react-redux";
import {Context} from './components/context/context';
import {taskType} from "types";
import {store} from "./redux-toolkit/store";

function App() {
    const [currentDate, setCurrentDate] = useState(new Date())
    const [showedTypeOfTask, setShowedTypeOfTask] = useState(taskType.all)
    const [logged, setLogged] = useState(false)

    const context = {
        currentDate: {
            currentDate: currentDate,
            setCurrentDate: setCurrentDate,
        },
        taskType: {
            showedTypeOfTask: showedTypeOfTask,
            setShowedTypeOfTask: setShowedTypeOfTask,
        },
        userLogged: {
            logged: logged,
            setLogged: setLogged,
        }
    }

    return (
        <>
            <Provider store={store}>
                <Context.Provider value={context}>
                    <Routes>
                        <Route path="/" element={<HomeView/>}/>
                        <Route path="login" element={<LoginView/>}/>
                        <Route path="register" element={<RegisterView/>}/>
                        <Route path="calendar" element={<CalendarView/>}/>
                        <Route path="map" element={<MapView/>}/>
                    </Routes>
                </Context.Provider>
            </Provider>
        </>
    );
}

export default App;
