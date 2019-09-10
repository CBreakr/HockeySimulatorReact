
import { reducerActionTypes as actionTypes } from "./gameActions";

import MockGame from "../GameProcessing/MockGame";

const initialState = {
  game:null,
  testValue:10,
  eventLog:[]
}

const gameReducer = (state = initialState, action) => {
  let newState = {...state};
  newState.eventLog = [...state.eventLog];

  console.log(`game reducer: ${action.type}`);

  switch(action.type){
    case actionTypes.INITIALIZE_GAME:
    // pass the dispatch into the game
      newState.game = new MockGame(action.dispatch);
      newState.game.initializeGame();
      newState.eventLog = [];
      console.log("reducer: initialize the game");
      break;
    case actionTypes.NEW_TEAMS:
      console.log("reducer: new teams");
      newState.game.generateTeams();
      break;
    case actionTypes.START_GAME:
      console.log("reducer: start the game");
      newState.game.startGame();
      break;
    case actionTypes.PAUSE_GAME:
      console.log("reducer: pause game");
      newState.game.pauseGame();
      break;
    case actionTypes.ADD_EVENT:
      console.log(`reducer: added event`, action.event);
      newState.eventLog.push(action.event);
      break;
    case actionTypes.RESET_GAME_WITH_NEW_TEAMS:
      console.log("reducer: reset game");
      newState.game.resetGameWithNewTeams();
      newState.eventLog = [];
      break;
    case actionTypes.RESET_GAME_AND_START:
      console.log("reducer: reset game");
      newState.game.resetGameAndStart();
      newState.eventLog = [];
      break;
    default:
      ;
  }

  return newState;
}

export default gameReducer;
