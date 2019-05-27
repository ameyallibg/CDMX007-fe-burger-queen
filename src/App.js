import React, {Component} from 'react';
import fireBase from './config-firebase/FireBase';
import LoginFirebase from './views/Login-firebase/Login-firebase';
import './App.css';
import RoutesApp from './Routes-App';
import { createBrowserHistory} from 'history';

const history = createBrowserHistory();


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    }
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

  componentDidMount() {
    this.authListener();

  }
  render(){
    
    return(
      
    <div>
    {this.state.user ? (<div><RoutesApp/>{history.replace('/Main')}</div> ):(  <LoginFirebase/>  )}
    </div>
    )
  }
}

export default App;