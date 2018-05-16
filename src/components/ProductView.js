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
        //here we are mapping over the products on state and spitting out a whole component for each product. Notice that we are including the key -- react needs that key since we are in a map function. Always on the outermost wrapper element. Since we are only returning one thing -- a component -- it goes there. All this data is also being passed as props to the ProductDisplay component.
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
