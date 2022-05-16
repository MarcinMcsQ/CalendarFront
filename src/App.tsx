import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {HomeView} from "./Views/HomeView";
import {LoginView} from "./Views/LoginView";
import {RegisterView} from "./Views/RegisterView";

function App() {
  return (
      <Routes>
        <Route path="/" element={<HomeView/>}/>
        <Route path="login" element={<LoginView/>}/>
        <Route path="register" element={<RegisterView/>}/>
      </Routes>
  );
}

export default App;
