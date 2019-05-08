import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Home from './components/home';
import Navbar from './components/navbar';
import Breakfast from './components/breakfast';
import Burgers from './components/burgers';
import Complements from './components/complements';
import Drinks from './components/drinks';


class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className ="App">
          <Navbar />
          <Route exact path="/" render = { () => <Home/>} />
          <Route path="/breakfast" render = { () => <Breakfast/>}/>
          <Route path="/burgers" render = { () => <Burgers/>}/>
          <Route path="/drinks" render = { () => <Drinks/>}/>
          <Route path="/complements" render = { () => <Complements/>}/>
        </div>
      </BrowserRouter>
      );
    }
  }
  
export default App;
