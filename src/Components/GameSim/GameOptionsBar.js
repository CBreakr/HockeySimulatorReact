import React from "react";

import TeamStats from "../../Containers/TeamStatsContainer";

class GameOptionsBar extends React.Component {
  render(){
    return (
      <div style={{padding:"2px", margin:"2px", border:"2px solid black", display:"flex", justifyContent:"space-around"}}>
        <span>
          <TeamStats />
        </span>
        <button>New Teams</button>
        {this.props.gameOn
        ? <button>Pause Game</button>
        : <button>Start Game</button>}

        <span>
          <TeamStats />
        </span>
      </div>
    )
  }
}

export default GameOptionsBar;
