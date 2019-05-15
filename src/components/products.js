import React, { Component } from "react";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    };
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
    var { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    } else if (window.location.href.includes("drinks")) {
      return (
        <div className="App">
          {items
            .filter(items => items.type.includes("drinks"))
            .map(item => (
              <div className="btns-burgers">
                <button className="btn-burger-style">
                  <div className="btn-circulo">
                    <img className="img-burger " src={item.img} />
                  </div>
                  <div className="btn-text">{item.name} </div>
                  <div className="btn-price">${item.price} </div>
                </button>
              </div>
            ))}
        </div>
      );
    } else if (window.location.href.includes("burgers")) {
      return (
        <div className="App">
          {items
            .filter(items => items.type.includes("burgers"))
            .map(item => (
              <div className="btns-burgers">
                <button className="btn-burger-style">
                  <div className="btn-circulo">
                    <img className="img-burger " src={item.img} />
                  </div>
                  <div className="btn-text">{item.name} </div>
                  <div className="btn-price">${item.price} </div>
                </button>
              </div>
            ))}
        </div>
      );
    } else if (window.location.href.includes("complements")) {
      return (
        <div className="App">
          {items
            .filter(items => items.type.includes("complements"))
            .map(item => (
              <div className="btns-burgers">
                <button className="btn-burger-style">
                  <div className="btn-circulo">
                    <img className="img-burger " src={item.img} />
                  </div>
                  <div className="btn-text">{item.name} </div>
                  <div className="btn-price">${item.price} </div>
                </button>
              </div>
            ))}
        </div>
      );
    } else if (window.location.href.includes("breakfast")) {
      return (
        <div className="App">
          {items
            .filter(items => items.type.includes("breakfast"))
            .map(item => (
              <div className="btns-burgers">
                <button className="btn-burger-style">
                  <div className="btn-circulo">
                    <img className="img-burger " src={item.img} />
                  </div>
                  <div className="btn-text">{item.name} </div>
                  <div className="btn-price">${item.price} </div>
                </button>
              </div>
            ))}
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Products;
