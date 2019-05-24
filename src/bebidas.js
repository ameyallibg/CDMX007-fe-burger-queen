// import React, { Component } from "react";
import Ticket from "./tickets";
import React from 'react';
// import {AppContextProvider, AppContext} 
// from './appContext';

class bebidas extends React.Component {
  clickMe(items) {
    const producSelect = this.setState({
      order: [...this.state.order, { name: items.name, price: items.precio }]
    });
  }

  render() {
    var{isLoaded,items} = this.context ;
    if (!isLoaded){
      return <div>Loading--</div>
    }
    else if(window.location.href.includes("bebidas")){
    return (

      <div class="container">
      {
        items.filter(item =>item.type==="bebidas").map(item=>
          <div class="container-flex-izq">
          <button
                  className="marco-bloque" 
                  onClick={this.clickMe.bind(this, item)}
                   key={item.id}>
          
            <div class="bloque bloque-der">
            <div class="bloque-img"><img class="img-comida" src={item.img} alt=""></img></div>
            
            </div>
            <div class="bloque bloque-centro">
            <p class="title-container">{item.name}</p>
            </div>
            <div class="bloque bloque-izq">
            <p class="precio">${item.precio}</p>
            </div>
             
            </button>      
          </div>
        )

      }
      <Ticket order={this.state.order} />
      </div>
              
    );
  }
  else if(window.location.href.includes("desayunos")){
    return (

      <div class="container">
      {
        items.filter(item =>item.type==="desayunos").map(item=>
          <div class="container-flex-izq">
          <div class="marco-bloque" key={item.id}>
            <div class="bloque bloque-der">
            <div class="bloque-img"><img class="img-comida" src={item.img}></img></div>
            
            </div>
            <div class="bloque bloque-centro">
            <p class="title-container">{item.name}</p>
            </div>
            <div class="bloque bloque-izq">
            <p class="precio">${item.precio}</p>
            </div>
            </div>       
          </div>)
      }
      </div>
              
    );
  }
  else if(window.location.href.includes("complementos")){
    return (

      <div class="container">
      {
        items.filter(item =>item.type==="complementos").map(item=>
          <div class="container-flex-izq">
          <div class="marco-bloque" key={item.id}>
            <div class="bloque bloque-der">
            <div class="bloque-img"><img class="img-comida" src={item.img}></img></div>
            
            </div>
            <div class="bloque bloque-centro">
            <p class="title-container">{item.name}</p>
            </div>
            <div class="bloque bloque-izq">
            <p class="precio">${item.precio}</p>
            </div>
            </div>       
          </div>)
      }
      </div>
              
    );
  }
  else 
    return (

      <div class="container">
      {
        items.filter(item =>item.type==="hamburguesa").map(item=>
          <div class="container-flex-izq">
          <div class="marco-bloque" key={item.id}>
            <div class="bloque bloque-der">
            <div class="bloque-img"><img class="img-comida" src={item.img}></img></div>
            
            </div>
            <div class="bloque bloque-centro">
            <p class="title-container">{item.name}</p>
            </div>
            <div class="bloque bloque-izq">
            <p class="precio">${item.precio}</p>
            </div>
            </div>       
          </div>)
      }
      </div>
              
    );
  }
  
}

// bebidas.contextType = AppContext;

// class App extends React.Component {
//   render(){
//     return(

//      <AppContextProvider>
//        <bebidas/>
//       </AppContextProvider>
//     )
//   }
// }
  

export default bebidas;
