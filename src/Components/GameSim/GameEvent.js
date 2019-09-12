import React from "react";

class GameEvent extends React.Component{
  render(){

    const style = {
      backgroundColor:this.props.event.color
    };

    if(this.props.event.highlight){
      style.fontWeight = "bold";
    }

    return (
      <div style={style}>
        {this.props.event.type}
      </div>
    )
  }
}

export default GameEvent;
