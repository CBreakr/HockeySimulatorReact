import React from "react";

class Scoreboard extends React.Component {
  render() {
    return (
      <div>
        <div style={{display:"flex", justifyContent:"space-around"}}>
          <TeamScoreDisplay team={{name:"AAA", goals:2, shots: 12}} />
          <TeamScoreDisplay team={{name:"BBB", goals:1, shots:14}} />
        </div>
      </div>
    )
  }
}

const TeamScoreDisplay = (props) => {
  return (
    <div style={{display:"flex", flexDirection:"column"}}>
      <h3>{props.team.name}</h3>
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
