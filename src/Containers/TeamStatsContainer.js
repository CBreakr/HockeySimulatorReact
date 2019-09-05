
import { connect } from "react-redux";

import TeamStats from "../Components/GameSim/TeamStats";

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

export default enhancer(TeamStats);
