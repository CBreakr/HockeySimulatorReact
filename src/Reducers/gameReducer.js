
import { reducerActionTypes as actionTypes } from "./gameActions";

const initialState = {
  game:null,
  testValue:10
}

const gameReducer = (state = initialState, action) => {
  let newState = {...state};

  console.log(`game reducer: ${action.type}`);

  switch(action.type){
    case actionTypes.TEST_TYPE:
      console.log(`test game action: ${action.value}`);
      newState.testValue++;
      break;
    case actionTypes.INITIALIZE_GAME:
      newState.game = {
        gameOn: true
      };
      console.log("initialize the game");
    default:
      ;
  }

  return newState;
}

export default gameReducer;
