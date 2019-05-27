import React from 'react';

class bebidas extends React.Component {
  render() {

    const {items,handleClick} = this.context ;

    if(window.location.href.includes("bebidas")){
    return (

      <div className="container">
      {
        items.filter(item =>item.type==="bebidas").map(item=>
          <div className="container-flex-izq">
          <button
                  className="marco-bloque" 
                  onClick={() => handleClick(item)}
                   >
          
            <div className="bloque bloque-der">
            <div className="bloque-img"><img class="img-comida" src={item.img} alt=""></img></div>
            
            </div>
            <div className="bloque bloque-centro">
            <p className="title-container">{item.name}</p>
            </div>
            <div className="bloque bloque-izq">
            <p className="precio">${item.precio}</p>
            </div>
             
            </button>      
          </div>
        )

      }
      </div>
              
    );
  }
  else if(window.location.href.includes("desayunos")){
    return (

      <div className="container">
      {
        items.filter(item =>item.type==="desayunos").map(item=>
          <div className="container-flex-izq">
          <button className="marco-bloque" 
                  onClick={() => handleClick(item)}
                   >
            <div className="bloque bloque-der">
            <div className="bloque-img"><img className="img-comida" src={item.img} alt=""></img></div>
            
            </div>
            <div className="bloque bloque-centro">
            <p className="title-container">{item.name}</p>
            </div>
            <div className="bloque bloque-izq">
            <p className="precio">${item.precio}</p>
            </div>
            </button>       
          </div>
          )
      }
      </div>
              
    );
  }
  else if(window.location.href.includes("complementos")){
    return (

      <div className="container">
      {
        items.filter(item =>item.type==="complementos").map(item=>
          <div className="container-flex-izq">
          <button className="marco-bloque" 
                  onClick={() => handleClick(item)}
                   >
            <div className="bloque bloque-der">
            <div className="bloque-img"><img className="img-comida" src={item.img} alt=""></img></div>
            
            </div>
            <div className="bloque bloque-centro">
            <p className="title-container">{item.name}</p>
            </div>
            <div className="bloque bloque-izq">
            <p className="precio">${item.precio}</p>
            </div>
            </button>       
          </div>)
      }
      </div>
              
    );
  }
  else 
    return (

      <div className="container">
      {
        items.filter(item =>item.type==="hamburguesa").map(item=>
          <div className="container-flex-izq">
          <button className="marco-bloque" 
                  onClick={() => handleClick(item)}
                   >
            <div className="bloque bloque-der">
            <div className="bloque-img"><img className="img-comida" src={item.img} alt=""></img></div>
            
            </div>
            <div className="bloque bloque-centro">
            <p className="title-container">{item.name}</p>
            </div>
            <div className="bloque bloque-izq">
            <p className="precio">${item.precio}</p>
            </div>
            </button>       
          </div>)
      }
      </div>
              
    );
  }
  
}



export default bebidas;
