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
    //on page load, hits the end point which will make a request to our products API and return the product that matches what our id is

    //How do we get the id to send in the get request?
    console.log('Here is the id being added to the url: ', this.props);
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
          //we are using && here because when react is looking for this image on page load, it hasn't quite been saved to state. It looks for it on state before it's available. So, we say "Is this.state.product.picture true?" if so, look for the picture and display it. Otherwise, it won't do anything which avoids an error..
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
        <div>
          {/* Switch statement here will go through and try to match both of these paths, only displaying whatever path matches */}
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
