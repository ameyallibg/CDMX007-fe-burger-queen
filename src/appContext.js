
import React from 'react';

export const AppContext = React.createContext({})



export class AppContextProvider extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            items: [],
            list:[],
    
        }
        this.handleClick = this.handleClick.bind(this);
        this.remove = this.remove.bind(this);
        this.cancel = this.cancel.bind(this);
        
      }

     

    
      componentDidMount(){
    
          fetch('https://burguer-queen-a6bd6.firebaseio.com/food/food.json')
          .then(res => res.json())
          .then(json => {
              this.setState({
                
                items: json,
              })
          })
    
      }
      
      handleClick(items) {
        

        const order = [...this.state.list]  
        order.push(items);
        this.setState({
          list: order
        });
        console.log(order);
      }



    remove(index) {
        console.log(index);
        // arreglo = arreglo.filter((i) => i !== 3);
        const items = this.state.list.filter((i) => i.id !== index.id)
        
        this.setState({list:items})
        
        
        }
      
    cancel() {
      
      this.setState({
        list: [],
        })
  }

      
    render(){
   
      return(

  
<AppContext.Provider
        value={{
          items: this.state.items,
          order:this.state.order,
          handleClick: this.handleClick,
          list:this.state.list,
          remove: this.remove,
          cancel: this.cancel,
          
        }}
      >
        {this.props.children}
      </AppContext.Provider>
        
      )
    }
  }

  export const AppContextConsumer = AppContext.Consumer;