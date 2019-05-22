import React from "react";

export const AppContext = React.createContext();

const productOrder = [];

export class AppContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      order: []
    };
    this.btnSelect = this.btnSelect.bind(this);
  }

  btnSelect(item) {
    productOrder.push(item);
    this.setState({
      order: productOrder
    });
  }

  componentDidMount() {
    fetch("https://buger-queen.firebaseio.com/products.json").then(res =>
      res.json().then(json => {
        this.setState({
          items: json
        });
      })
    );
  }
  render() {
    const { productOrder } = this.state;

    return (
      <AppContext.Provider
        value={{
          items: this.state.items,
          order: this.state.order,
          btnSelect: this.btnSelect,
          productOrder
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export const AppContextConsumer = AppContext.Consumer;
