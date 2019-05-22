import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./css/App.css";
import { AppContextProvider, AppContext } from "./appContext";
import Navbar from "./components/navbar";
import Products from "./components/products";
import Ticket from "./components/ticket";

Ticket.contextType = AppContext;
Products.contextType = AppContext;

class App extends Component {
  render() {
    return (
      <AppContextProvider>
        <BrowserRouter>
          <div className="App">
            <Navbar />

            <Route path="/breakfast" render={() => <Products />} />
            <Route path="/burgers" render={() => <Products />} />
            <Route path="/drinks" render={() => <Products />} />
            <Route path="/complements" render={() => <Products />} />
          </div>
        </BrowserRouter>
      </AppContextProvider>
    );
  }
}

export default App;
