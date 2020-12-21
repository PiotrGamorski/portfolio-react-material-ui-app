import React from "react";
import { CssBaseline } from "@material-ui/core";
import {Route} from "react-router-dom";
import "./App.css";
import Home from "./components";
import Resume from "./components/Resume";

function App() {
  return (
    <CssBaseline>
      <Route exact path="/" component={Home}/>
      <Route path="/resume" component={Resume}/>
    </CssBaseline>
  );
}

export default App;
