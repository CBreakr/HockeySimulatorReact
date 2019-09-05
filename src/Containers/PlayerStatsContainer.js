
import { connect } from "react-redux";

import PlayerStats from "../Components/GameSim/PlayerStats";

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

export default enhancer(PlayerStats);
