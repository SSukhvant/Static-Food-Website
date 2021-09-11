import React from "react";
import {Route } from "react-router";
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./Home";
import SignUp from "./SignUp";

function App() {
  return (
   <>
   <Navbar/>
   <switch>
   <Route exact path="/" component={Home} />
   <Route exact path="/SignUp" component={SignUp}/>
   {/* <Redirect to="/"/> */}
   </switch>
   </>
  );
}

export default App;
