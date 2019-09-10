import React from "react";

import TeamStats from "../../Containers/TeamStatsContainer";

class GameOptionsBar extends React.Component {

  constructor(){
    super();
  }

  render(){
    return (
      <div style={{padding:"2px", margin:"2px", border:"2px solid black", display:"flex", justifyContent:"space-around"}}>
        <span>
          <TeamStats />
        </span>

        {this.props.game != null
          ? <GameExistsComponent props={this.props} />
          : <ActionButton action={this.props.initialize} text={"New Teams"} />
        }

        <span>
          <TeamStats />
        </span>
      </div>
    )
  }
}

const GameExistsComponent = (props) => {
  /*
  gameOn
    - Pause Game: pause
  else
    game finished:
      - New Teams: reset, new teams
      - Start Next Game: reset, start
    else
      - New Teams: reset, new teams
      - Restart Game: start
  */

  const {props:inner} = props;

  return (
    <>
    {inner.game.gameOn
      ? <ActionButton action={inner.pause} text={"Pause Game"} />
      : <GameNotOnComponent props={inner} />
    }
    </>
  )
}

const GameNotOnComponent = (props) => {

  const {props:inner} = props;

  return (
    <>
    {inner.game.finished
      ? <>
      <ActionButton action={inner.resetWithNewTeams} text={"New Teams"} />
      <ActionButton action={inner.resetAndStart} text={"Start Next Game"} />
      </>
      : <>
       <ActionButton action={inner.resetWithNewTeams} text={"New Teams"} />
       {inner.game.count
          ? <ActionButton action={inner.start} text={"Resume Game"} />
          : <ActionButton action={inner.start} text={"Start Game"} />
       }
       </>
    }
    </>
  )
}

const ActionButton = (props) => {
  return (
    <button
    onClick={props.action}>
      {props.text}
    </button>
  )
}

export default GameOptionsBar;
