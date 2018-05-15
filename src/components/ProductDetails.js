import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";

import Description from "./mini-routes/Description";
import BuyOptions from "./mini-routes/BuyOptions";

import axios from "axios";

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {}
    };
  }
  componentDidMount() {
    axios.get(`/api/getProduct/${this.props.match.params.id}`).then(resp => {
      this.setState({ product: resp.data[0] });
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.product.name}</h1>
        <img
          className="small-pic-frame"
          src={
            this.state.product.picture &&
            require(`./../assets/${this.state.product.picture}`)
          }
          alt=""
        />
        <div className="button-box">
          <button>
            <Link to={`/details/${this.props.match.params.id}/description`}>
              Description
            </Link>
          </button>
          <button>
            <Link
              to={`/details/${this.props.match.params.id}/buyingInformation`}
            >
              Buying Information
            </Link>
          </button>
        </div>
        <div className="descript">
          <Switch>
            <Route
              path="/details/:id/description"
              render={() => (
                <Description description={this.state.product.description} />
              )}
            />
            <Route
              path="/details/:id/buyingInformation"
              component={BuyOptions}
            />
          </Switch>
        </div>
        <button>
          <Link to="/">Back to products</Link>
        </button>
      </div>
    );
  }
}

export default ProductDetails;
