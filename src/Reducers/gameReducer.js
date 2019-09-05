
import { reducerActionTypes as actionTypes } from "./gameActions";

const initialState = {
  
}

const gameReducer = (state = initialState, action) => {
  let newState = {...state};

  console.log(`game reducer: ${action.type}`);

  switch(action.type){
    case actionTypes.TEST_TYPE:
      console.log(`test game action: ${action.value}`);
      break;
    default:
      ;
  }

  return newState;
}

export default gameReducer;
