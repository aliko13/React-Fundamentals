import React, { Component } from "react";
import Products from "./products";
import Navbar from "./navbar";

class App extends Component {
  state = {
    products: [
      { id: 0, name: "Product 1", count: 1, price: 25 },
      { id: 1, name: "Product 2", count: 1, price: 35 },
      { id: 2, name: "Product 3", count: 1, price: 45 },
      { id: 3, name: "Product 4", count: 1, price: 55 },
      { id: 4, name: "Product 5", count: 1, price: 65 },
    ],
  };

  handleOperation = (productID, operation) => {
    let products = this.state.products;
    const productIndex = products.findIndex(
      (product) => product.id === productID
    );

    switch (operation) {
      case "+":
        products[productIndex].count += 1;
        break;
      case "-":
        if (products[productIndex].count > 0) {
          products[productIndex].count -= 1;
        }
        break;
      case "delete":
        products = products.filter((product) => product.id !== productID);
        break;
      default:
        products[productIndex].count += 1;
    }

    this.setState({ products });
  };

  render() {
    return (
      <React.Fragment>
        <div className="container main-container">
          <Navbar
            totalCounts={
              this.state.products.filter((product) => product.count > 0).length
            }
          />
          <Products
            products={this.state.products}
            onOperation={this.handleOperation}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
