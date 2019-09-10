
import { takeEvery, takeLatest, put } from "redux-saga/effects";

import {sagaActionTypes, reducerActionTypes} from "../Reducers/gameActions";

function* metaGameSaga() {
  console.log("metagame saga");

  yield takeLatest(sagaActionTypes.INITIALIZE_GAME_SAGA, initializeGame);
  yield takeLatest(sagaActionTypes.NEW_TEAMS_SAGA, newTeams);
  yield takeLatest(sagaActionTypes.START_GAME_SAGA, startGame);
  yield takeLatest(sagaActionTypes.PAUSE_GAME_SAGA, pauseGame);
  yield takeLatest(sagaActionTypes.RESET_GAME_WITH_NEW_TEAMS_SAGA, resetGameWithNewTeams);
  yield takeLatest(sagaActionTypes.RESET_GAME_AND_START_SAGA, resetGameAndStart);
  yield takeLatest(sagaActionTypes.ADD_EVENT_SAGA, addEvent);
}

//
//
//
function* initializeGame(dispatch){
  const {dispatch:inner} = dispatch;
  console.log("initialize game saga");
  yield put({type:reducerActionTypes.INITIALIZE_GAME, dispatch:inner});
}

function* newTeams(){
  console.log("new teams saga");
  yield put({type:reducerActionTypes.NEW_TEAMS});
}

function* startGame(){
  console.log("start game saga");
  yield put({type:reducerActionTypes.START_GAME});
}

function* pauseGame(){
  console.log("pause game saga");
  yield put({type:reducerActionTypes.PAUSE_GAME});
}

function* resetGameWithNewTeams(){
  console.log("reset game with new teams saga");
  yield put({type:reducerActionTypes.RESET_GAME_WITH_NEW_TEAMS});
}

function* resetGameAndStart(){
  console.log("reset game and start saga",);
  yield put({type:reducerActionTypes.RESET_GAME_AND_START});
}

function* addEvent(event){
  const {event:inner} = event;
  console.log("add event saga", event);
  yield put({type:reducerActionTypes.ADD_EVENT, event:inner});
}

export default metaGameSaga;
