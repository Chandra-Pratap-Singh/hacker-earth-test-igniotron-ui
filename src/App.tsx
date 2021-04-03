import React from "react";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import RestaurantDetails from "./components/restaurant-details";
import RestaurantList from "./components/restaurant-list";

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid m-0 p-0">
        <Header></Header>
        <Switch>
          <Route path="/restaurant/:id" component={RestaurantDetails}></Route>
          <Route path="/restaurants" component={RestaurantList}></Route>
          <Route>
            <Redirect to="/restaurants"></Redirect>{" "}
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
