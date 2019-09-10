
import { connect } from "react-redux";

import GameOptions from "../Components/GameSim/GameOptionsBar";

import { dispatchActions } from "../Reducers/gameActions";

const mapStateToProps = (state, props) => {
  console.log("game options map state to props", state, props);
  return {
    ...state.gameReducer,
    extra:"extra"
  };
}

const mapDispatchToProps = dispatch => {
  return {
    initialize: () => dispatchActions.initializeGame(dispatch),
    start: () => dispatchActions.startGame(dispatch),
    pause: () => dispatchActions.pauseGame(dispatch),
    newTeams: () => dispatchActions.newTeams(dispatch),
    resetWithNewTeams: () => dispatchActions.resetGameWithNewTeams(dispatch),
    resetAndStart: () => dispatchActions.resetGameAndStart(dispatch)
  };
}

const enhancer = connect(mapStateToProps, mapDispatchToProps);

export default enhancer(GameOptions);
