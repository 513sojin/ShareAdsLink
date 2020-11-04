//App.js
import React from 'react';
import Home from './Home';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Login from "./Component/Login";
import SignUp from "./Component/SignUp";

function App() {
  return (
    <Router>
      <Route path="/" component={Home} exact/>
      <Switch>
        <Route exact path="/Login" component={Login} />
        <Route path="/SignUp" component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
