import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./css/App.css";
import Navbar from "./components/navbar";
import Products from "./components/products";
// import Ticket from "./components/ticket";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route path="/breakfast" render={() => <Products />} />
          <Route path="/burgers" render={() => <Products />} />
          <Route path="/drinks" render={() => <Products />} />
          <Route path="/complements" render={() => <Products />} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
