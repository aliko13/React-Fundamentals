import React, { Component } from "react";

class Product extends Component {
  /* The method below is used to 
  bind the function to state function */
  // constructor() {
  //   super();
  //   this.onOperation = this.onOperation.bind(this);
  // }

  styles = {
    fontWeight: "bold",
    fontSize: 10,
  };

  formatCount = (count) => {
    return count === 0 ? "Zero" : count;
  };

  classCount = (count) => {
    let baseClass = "badge m-2 ";
    baseClass += count === 0 ? "badge-warning" : "badge-primary";
    return baseClass;
  };

  render() {
    const { onOperation, product } = this.props;

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-2 col-sm-6">
            <h5>{product.name}:</h5>
          </div>

          <div className="col-md-2 col-sm-6">
            <h5>{product.price}$</h5>
          </div>

          <div className="col-sm-2">
            <span className={this.classCount(product.count)}>
              {this.formatCount(product.count)}
            </span>
          </div>

          <div className="col-sm-2">
            <button
              onClick={() => {
                onOperation(product.id, "+");
              }}
              style={this.styles}
              className="btn btn-primary sm m-1"
            >
              Increment
            </button>
          </div>

          <div className="col-sm-2">
            <button
              onClick={() => {
                onOperation(product.id, "-");
              }}
              style={this.styles}
              className="btn btn-warning sm m-1"
            >
              Decrement
            </button>
          </div>

          <div className="col-sm-2">
            <button
              onClick={() => {
                onOperation(product.id, "delete");
              }}
              style={this.styles}
              className="btn btn-danger sm m-1"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
