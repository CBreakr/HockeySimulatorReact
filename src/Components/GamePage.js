
import React from "react";

import GameDisplay from "../Containers/GameDisplayContainer";
import GameOptionsBar from "../Containers/GameOptionsContainer";
import Scoreboard from "../Containers/ScoreboardContainer";

class GamePage extends React.Component {
  render() {
    return (
      <div>
        <GameOptionsBar />
        <Scoreboard />
        <GameDisplay eventLog={[{}, {}, {}]} />
      </div>
    );
  }
}

export default GamePage;
