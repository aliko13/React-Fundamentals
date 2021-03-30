import React, { Component } from "react";
import Product from "./product";

class Products extends Component {
  render() {
    const { products, onOperation } = this.props;

    if (products.length === 0)
      return (
        <div className="alert alert-info" role="alert">
          There is no tag available, please create a tag
        </div>
      );
    else
      return (
        <div className="panel panel-default">
          <div className="panel-body">
            <ul>
              {products.map((product) => (
                <li key={product.id}>
                  <Product
                    key={product.id}
                    onOperation={onOperation}
                    product={product}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
  }
}

export default Products;
