import React from "react";

class Products extends React.Component{
    constructor (props) {
        super(props);
        this.state = {
          categories: []
        }
      }
      componentDidMount () {
        let categories = [
          {
            name: 'bebidas',
            id: 0
          },
          {
            name: 'burguers',
            id: 1
          },
          {
            name: 'desayunos',
            id: 2
          },
          {
            name: 'complementos',
            id: 3
          }
        ];
        this.setState({ categories });
      }    
    render(){
        const{items} = this.context ;
      return(
    <div className="container">
      {
        items.filter(item =>item.type.includes(categories)).map(item=>
          <div class="container-flex-izq">
          <button
                  className="marco-bloque" 
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
      {/* <Ticket order={this.state.order} /> */}
      </div>
  
      )
  }
  }

  export default Products;