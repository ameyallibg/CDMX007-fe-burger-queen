    
import React from "react";
import borrar from './assets/borrar.png';



class Ticket extends React.Component{
  render(){
    const {list, remove, cancel} = this.context;
    
    return(
      
          <div>
      {list.map((element)=> (
        <div className="produc-list">
          <li>
            <button className="ticket">
              <div>
                {element.name} $ {element.precio}
                
              </div>
              <button  className="marco"
        onClick={()=>remove(element)} type="button"><div className="bloque-img bloque-der"><img className="img-comida" src={borrar} alt=""></img></div></button>
            </button>
          </li>
        

        </div>
      ))
      }
      <button  
        onClick={() => cancel(list)} type="button"></button>
     <div>$ {list.reduce((a, c)=>{
                    return a + c.precio;}, 0)}</div>
    </div>

    )
}
}


export default Ticket;

