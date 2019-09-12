import React from "react";

class Scoreboard extends React.Component {
  render() {
    console.log("scoreborard props", this.props);
    return (
      <div>
        {this.props.game
          ? <div style={{display:"flex", justifyContent:"space-around"}}>
            <TeamScoreDisplay team={this.props.game.home_team} />
            <TeamScoreDisplay team={this.props.game.away_team} />
          </div>
          :<></>
        }
      </div>
    )
  }
}

const TeamScoreDisplay = (props) => {
  return (
    <div style={{display:"flex", flexDirection:"column"}}>
      <h3 style={
        props.team.won
        ? {backgroundColor:"#33DD55"}
        : null
      }>{props.team.team_name}: {props.team.wins}</h3>
      <span>
        <h4>Goals: {props.team.goals}</h4>
      </span>
      <span>
        Shots: {props.team.shots}
      </span>
    </div>
  )
}

export default Scoreboard;
