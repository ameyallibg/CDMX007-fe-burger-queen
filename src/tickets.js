    
import React from "react";

// const Ticket = props => {
//   console.log(props);
//   return (
//     <div>
//       {props.order.map(order => (
//         <ul className="produc-list">
//           <li>
//             <button className="btn-ticket">
//               <pre>
//                 {order.name} $ {order.precio}
//               </pre>
//             </button>
//           </li>
//         </ul>
//       ))}
//     </div>
//   );
// };

class Ticket extends React.Component{
  render(){
    var{order} = this.context ;
    return(
          <div>
      {order.map(order => (
        <ul className="produc-list">
          <li>
            <button className="btn-ticket">
              <pre>
                {order.name} $ {order.precio}
              </pre>
            </button>
          </li>
        </ul>
      ))}
    </div>

    )
}
}


export default Ticket;