
import { connect } from "react-redux";

import Scoreboard from "../Components/GameSim/Scoreboard";

import { DispatchAction } from "../Reducers/gameActions";

const mapStateToProps = (state, props) => {
  return {
    ...state.gameReducer
  };
}

const mapDispatchToProps = dispatch => {
  return {

  };
}

const enhancer = connect(mapStateToProps, mapDispatchToProps);

export default enhancer(Scoreboard);
