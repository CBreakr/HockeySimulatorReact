

// need to get these to match properly
// with the usage

export const reducerActionTypes = {
  INITIALIZE_GAME: "INITIALIZE_GAME",
  NEW_TEAMS: "NEW_TEAMS",
  START_GAME: "START_GAME",
  PAUSE_GAME: "PAUSE_GAME",
  RESET_GAME_WITH_NEW_TEAMS: "RESET_GAME_WITH_NEW_TEAMS",
  RESET_GAME_AND_START: "RESET_GAME_AND_START",
  ADD_EVENT: "ADD_EVENT"
};

export const sagaActionTypes = {
  INITIALIZE_GAME_SAGA: "INITIALIZE_GAME_SAGA",
  NEW_TEAMS_SAGA: "NEW_TEAMS_SAGA",
  START_GAME_SAGA:"START_GAME_SAGA",
  PAUSE_GAME_SAGA: "PAUSE_GAME_SAGA",
  RESET_GAME_WITH_NEW_TEAMS_SAGA: "RESET_GAME_WITH_NEW_TEAMS_SAGA",
  RESET_GAME_AND_START_SAGA: "RESET_GAME_AND_START_SAGA",
  ADD_EVENT_SAGA: "ADD_EVENT_SAGA"
};

export const dispatchActions = {
  initializeGame: (dispatch) => {
    console.log("actions: initialize", dispatch);
    dispatch({
      type:sagaActionTypes.INITIALIZE_GAME_SAGA,
      dispatch
    });
  },
  newTeams: (dispatch) => {
    console.log("actions: new teams");
    dispatch({type:sagaActionTypes.NEW_TEAMS_SAGA});
  },
  startGame: (dispatch) => {
    console.log("actions: start");
    // dispatch({type:reducerActionTypes.START_GAME});
    dispatch({type:sagaActionTypes.START_GAME_SAGA});
  },
  pauseGame: (dispatch) => {
    console.log("actions: pause");
    dispatch({type:sagaActionTypes.PAUSE_GAME_SAGA});
  },
  addEvent: (dispatch, event) => {
    console.log("actions: add event");
    // hmm... I hate that I have to do this...
    setTimeout(() => {
      dispatch({
        type:sagaActionTypes.ADD_EVENT_SAGA,
        event
      });
    }, 0);
  },
  resetGameWithNewTeams: (dispatch) => {
    console.log("actions: reset");
    dispatch({type:sagaActionTypes.RESET_GAME_WITH_NEW_TEAMS_SAGA});
  },
  resetGameAndStart: (dispatch) => {
    console.log("actions: reset");
    dispatch({type:sagaActionTypes.RESET_GAME_AND_START_SAGA});
  }
};
