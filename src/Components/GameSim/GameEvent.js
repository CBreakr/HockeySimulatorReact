import React from "react";

class GameEvent extends React.Component{
  render(){
    return (
      <div style={{backgroundColor:this.props.event.color}}>
        {this.props.event.index}: EVENT: {this.props.event.value} {this.props.event.type}
      </div>
    )
  }
}

export default GameEvent;
