
import React from "react";
import { NavLink } from "react-router-dom";

const style = {
  color:"green",
  fontWeight:"bold"
};

class MainNavBar extends React.Component {
  render(){
    return (
      <div>
        <NavLink exact to="/" activeStyle={style}>Home</NavLink>
        <NavLink exact to="/game" activeStyle={style}>Game</NavLink>
      </div>
    );
  }
}

export default MainNavBar;
