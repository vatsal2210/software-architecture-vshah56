import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from './Home';
import Microservice from './Microservice';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header style={{minHeight: '7vh', backgroundColor: '#0f6ab4', display: 'flex'}}>
            <p style={{margin: 'auto 20px', color: 'white', width: '12%'}}> The PurplePages </p>
            <div style={{margin: 'auto 0px', width: '75%', color: 'white'}}>
                Software Architecture - Team 01
            </div>
        </header>
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/microservice" component={Microservice} />
            </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
