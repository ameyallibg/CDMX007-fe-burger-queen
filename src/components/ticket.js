import React, { Component } from "react";

class Ticket extends Component {
  render() {
    const { order } = this.context;
    return (
      <div className="ticket-order">
        {order.map(order => (
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
        Total $
        {order.reduce((sum, newPrice) => {
          return sum + newPrice.price;
        }, 0)}
      </div>
    );
  }
}

export default Ticket;
