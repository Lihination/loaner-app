import React, { Fragment } from "react";
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
// import "./style.css";
import Main from './Main'
import Login from "./layout/auth/Login"
import SignUp from "./layout/auth/SignUp"
import Profile from './layout/main/Profile'

function App() {
  return (
    <Router>
    <Fragment>
      <Switch>
        <Route exact path="/" component= {Main}/>
        <Route exact path="/login" component= {Login}/>
        <Route exact path="/signup" component= {SignUp}/>
        <Route exact path="/profile" component= {Profile}/>
      </Switch>
    </Fragment>
    </Router>
  );
}

export default App;
