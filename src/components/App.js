import "../styles/App.css";

import React, { Component } from "react";
import Board from "./Board";
import Navbar from "./Navbar";
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Filehub from "./Filehub";
import project from "./project";

class App extends React.Component {
  
  render() {
    return (

      <div className="App">

       <Router>
         <Navbar/>
         <Switch>
           <Route path='/' exact component={Home} />
           <Route path='/taskmanager' component={Board} />
           <Route path='/filehub' component={Filehub} />
           <Route path='/project' component={project} />
         </Switch>
       </Router>
      </div>

    );
  }
}

export default App;
