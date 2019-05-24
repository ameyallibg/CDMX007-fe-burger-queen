
import React from 'react';

export const AppContext = React.createContext({
  
})


export class AppContextProvider extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            items: [],
            order:[],
            isLoaded: false,
    
        }
      }



    
      componentDidMount(){
    
          fetch('https://burguer-queen-a6bd6.firebaseio.com/food/food.json')
          .then(res => res.json())
          .then(json => {
              this.setState({
                isLoaded: true,
                items: json,
              })
          })
    
      }


    render(){
      return(
  
<AppContext.Provider
        value={{
          items: this.state.items,
          order:this.state.order,
          isLoaded:this.state.order,
          
        }}
      >
        {this.props.children}
      </AppContext.Provider>
        
      )
    }
  }

  export const AppContextConsumer = AppContext.Consumer;