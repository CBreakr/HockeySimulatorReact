
import React from "react";
import { Route, Redirect } from "react-router-dom";

import MainNavBar from "./MainNavBar";
import MainPage from "./MainPage";
import GamePage from "./GamePage";

class MainAppDisplay extends React.Component {
  render() {
    return (
      <div>
        <MainNavBar />
        <Route exact path="/" component={MainPage} />
        <Route exact path="/game" component={GamePage} />
      </div>
    );
  }
}

export default MainAppDisplay;
