import React from "react";

import GameEvent from "../../Containers/GameEventContainer";

class GameDisplay extends React.Component {
  render() {
    console.log({props:this.props});
    return (
      <>
      <hr />
      <span>
        TEST
        {this.props.testValue}
        TEST
      </span>
      <div style={{display:"flex", flexDirection:"column"}}>
        {
          this.props.eventLog
          ? this.props.eventLog.map((event) => {
            return <GameEvent key={""+Math.random()} event={event} />
          })
          : <span>No Events Yet</span>
        }
      </div>
      <hr />
      </>
    )
  }
}

export default GameDisplay;
