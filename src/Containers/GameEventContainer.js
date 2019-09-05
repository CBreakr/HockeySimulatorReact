
import { connect } from "react-redux";

import GameEvent frrom "../Components/GameSim/GameEvent";

import { DispatchActions } from "../Reducers/gameActions";

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

export default enhancer(GameEvent);
