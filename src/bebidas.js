import React, { Component } from "react";
import cola from "./assets/cola.png"
import agua from "./assets/agua.png"
 

class bebidas extends Component {
  constructor(props){
    super(props)
    this.state ={
        items: [],
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
  render() {
    var{isLoaded,items} = this.state;
    if (!isLoaded){
      return <div>Loading--</div>
    }
    else if(window.location.href.includes("bebidas")){
    return (

      <div class="container">
      {
        items.filter(item =>item.type==="bebidas").map(item=>
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
          </div>
        )
      }
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
export default bebidas;
