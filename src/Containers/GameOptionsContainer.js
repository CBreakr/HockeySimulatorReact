
import { connect } from "react-redux";

import GameOptions from "../Components/GameSim/GameOptionsBar";

import { DispatchActions } from "../Reducers/gameActions";

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

export default enhancer(GameOptions);
