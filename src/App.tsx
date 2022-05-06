import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {HomeView} from "./Views/HomeView";

function App() {
  return (
      <Routes>
        <Route path="/" element={<HomeView/>}/>
        {/*<Route path="login" element={<LoginView/>}/>*/}
        {/*<Route path="register" element={<RegisterView/>}/>*/}
      </Routes>
  );
}

export default App;
