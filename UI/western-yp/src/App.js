import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header style={{minHeight: '7vh', backgroundColor: '#0f6ab4', display: 'flex'}}>
            <p style={{margin: 'auto 20px', color: 'white'}}> PurplePages </p>
            <div style={{margin: 'auto 0px', width: '100%', color: 'white'}}>
                Software Architecture - Team 01
            </div>
        </header>
        <div style={{width: '50%', height: '85vh'}}>
            <div style={{position: 'relative', top: '40%', left: '50%', width: '100%'}}>
                <button className="button">
                    Ski Resorts
                </button>
                <button className="button">Restaurants</button>
                <button className="button">Museums</button>
                <button className="button">Fortune Companies</button>
            </div>
        </div>
        <div style={{}}>
          <p>Western University</p>
        </div>
      </div>
    );
  }
}

export default App;
