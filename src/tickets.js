    
import React from "react";
import borrar from './assets/borrar.png';




class Ticket extends React.Component{
  render(){
    const {list, remove, cancel,addUser} = this.context;
    
    return(
      
          <div>
      {list.map((element)=> (
        <div className="produc-list">
          <li>
            <button className="ticket">
              <div className="font-size">
                {element.name} $ {element.precio}
                
              </div>
              <button  className="marco"
        onClick={()=>remove(element)} type="button"><div className="bloque-img bloque-der"><img className="img-comida" src={borrar} alt=""></img></div></button>
            </button>
          </li>
        

        </div>
      ))
      }
      <div>TOTAL: $ {list.reduce((a, c)=>{
                    return a + c.precio;}, 0)}</div>
      <div>
     
      <button  className="buttonOrder"
        onClick={() => cancel(list)} type="button">Confirmar Orden</button>
         <button type="submit" className="buttonOrder" onClick={addUser}>Cancelar Orden</button>
        </div>
     
    </div>

    )
}
}


export default Ticket;

