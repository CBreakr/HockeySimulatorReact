
import React from "react";
import { Route, Redirect } from "react-router-dom";

import MainNavBar from "./MainNavBar";
import MainPage from "./MainPage";

class MainAppDisplay extends React.Component {
  render() {
    return (
      <div>
        <MainNavBar />
        <Route exact path="/" component={MainPage} />
      </div>
    );
  }
}

export default MainAppDisplay;
