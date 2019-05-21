import React from "react";

const Ticket = props => {
  console.log(props);
  return (
    <div>
      {props.order.map(order => (
        <ul className="produc-list">
          <li>
            <button className="btn-ticket">
              <pre>
                {order.name} $ {order.price}
              </pre>
            </button>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Ticket;
