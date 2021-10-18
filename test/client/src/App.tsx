import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";


const App = () => {
  
  return (
    <LandingPage/>

  );
}

export default App;
