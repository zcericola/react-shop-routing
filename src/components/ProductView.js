import React, { Component } from "react";
import axios from "axios";

import ProductDisplay from "./ProductDisplay";

class ProductView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }
  componentDidMount() {
    axios.get("/api/products").then(resp => {
      console.log(resp);
      this.setState({ products: resp.data });
    });
  }
  render() {
    const products = this.state.products.map(curr => {
      return (
        <ProductDisplay
          key={curr.id}
          img={curr.picture}
          name={curr.name}
          price={curr.price}
          id={curr.id}
        />
      );
    });
    return (
      <div>
        <div className="flexed">{products}</div>
      </div>
    );
  }
}

export default ProductView;
