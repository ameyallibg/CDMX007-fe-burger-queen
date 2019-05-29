import React, {Component} from 'react';
import fireBase from './Fire.js';
import Main from 'Main.js';
import {AppContextProvider} from './appContext';
import Login from './login';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);
  }
  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fireBase.auth().onAuthStateChanged((user) => {
      if (user) {
        //actualiza el estado del componente
        this.setState({
          user
        });

      } else {
        this.setState({
          user: null
        });
      }
    });
  }

 
  render(){
    
    return(
      <AppContextProvider>
    <div>
    {this.state.user ? (<div><Login/></div> ):(  <Main/>  )}
    </div>
    </AppContextProvider>
    )
  }
}

export default App;