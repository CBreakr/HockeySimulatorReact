
import { connect } from "react-redux";

import Scoreboard from "../Components/GameSim/Scoreboard";

import { DispatchAction } from "../Reducers/gameAction";

const mapStateToProps = (state, props) => {
  return {
    ...state
  };
}

const mapDispatchToProps = dispatch => {
  return {

  };
}

const enhancer = connect(mapStateToProps, mapDispatchToProps);

export default enhancer(Scoreboard);
