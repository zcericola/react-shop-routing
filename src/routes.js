import React from "react";
import { Route, Switch } from "react-router-dom";

import ProductDetails from "./components/ProductDetails";
import ProductView from "./components/ProductView";

export default (
  <Switch>
    <Route exact path="/" component={ProductView} />
    <Route path="/details/:id" component={ProductDetails} />
  </Switch>
);
