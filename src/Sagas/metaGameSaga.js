
import { takeEvery, takeLatest, put } from "redux-saga/effects";

function* metaGameSaga() {
  console.log("metagame saga");

  yield takeLatest("TEST_ASYNC", testActionAsync);  
}

function* testActionAsync(){
  console.log("TEST saga");
  yield put({type:"TEST", value:1});
}

export default metaGameSaga;
