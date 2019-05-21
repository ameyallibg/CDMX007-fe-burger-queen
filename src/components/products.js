import React, { Component } from "react";
import Ticket from "./ticket";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      order: [],
      isLoaded: false
    };
  }

  clickMe(items) {
    const producSelect = this.setState({
      order: [...this.state.order, { name: items.name, price: items.price }]
    });
  }

  componentDidMount() {
    fetch("https://buger-queen.firebaseio.com/products.json").then(res =>
      res.json().then(json => {
        this.setState({
          isLoaded: true,
          items: json
        });
      })
    );
  }

  render() {
    var { isLoaded, items, order } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    } else if (window.location.href.includes("drinks")) {
      return (
        <div className="menu-burger">
          {items
            .filter(items => items.type.includes("drinks"))
            .map(item => (
              <div className="btns-burgers-right">
                <button
                  className="btn-burger-style"
                  onClick={this.clickMe.bind(this, item)}
                >
                  <div className="btn-circulo">
                    <img className="img-burger " src={item.img} />
                  </div>
                  <div className="btn-text">{item.name} </div>
                  <div className="btn-price">${item.price} </div>
                </button>
              </div>
            ))}
          <Ticket order={this.state.order} />
        </div>
      );
    } else if (window.location.href.includes("burgers")) {
      return (
        <div className="menu-burger-more">
          {items
            .filter(items => items.type.includes("burgers"))
            .map(item => (
              <div className="btns-burgers">
                <button
                  className="btn-burger-style"
                  onClick={this.clickMe.bind(this, item)}
                >
                  <div className="btn-circulo">
                    <img className="img-burger " src={item.img} />
                  </div>
                  <div className="btn-text">{item.name} </div>
                  <div className="btn-price">${item.price} </div>
                </button>
              </div>
            ))}

          <Ticket order={this.state.order} />
        </div>
      );
    } else if (window.location.href.includes("complements")) {
      return (
        <div className="menu-burger">
          {items
            .filter(items => items.type.includes("complements"))
            .map(item => (
              <div className="btns-burgers-right">
                <button
                  className="btn-burger-style"
                  onClick={this.clickMe.bind(this, item)}
                >
                  <div className="btn-circulo">
                    <img className="img-burger " src={item.img} />
                  </div>
                  <div className="btn-text-break">{item.name} </div>
                  <div className="btn-price">${item.price} </div>
                </button>
              </div>
            ))}
          <Ticket order={this.state.order} />
        </div>
      );
    } else if (window.location.href.includes("breakfast")) {
      return (
        <div className="menu-burger-more">
          {items
            .filter(items => items.type.includes("breakfast"))
            .map(item => (
              <div className="btns-burgers">
                <button
                  className="btn-burger-style"
                  onClick={this.clickMe.bind(this, item)}
                >
                  <div className="btn-circulo">
                    <img className="img-burger " src={item.img} />
                  </div>
                  <div className="btn-text-break">{item.name} </div>
                  <div className="btn-price">${item.price} </div>
                </button>
              </div>
            ))}
          <Ticket order={this.state.order} />
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Products;
