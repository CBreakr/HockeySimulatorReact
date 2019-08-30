
import { takeLatest, put } from "redux-saga/effects";

import { spawnAllRestartingSagas } from "./SpawnAllUtil";

import injurySaga from "./injurySaga";
import penaltySaga from "./penaltySaga";
import possessionSaga from "./possessionSaga";
import offensiveSaga from "./offensiveSaga";

function* gameSimSaga() {
  console.log("game sim saga run");
  yield takeLatest("TEST_ASYNC", testActionAsync);
  // yield [
  //   fork(injurySaga),
  //   fork(penaltySaga),
  //   fork(possessionSaga),
  //   fork(offensiveSaga)
  // ];
}

function* testActionAsync(){
  console.log("TEST saga");
  yield put({type:"TEST", value:1});
}

export default gameSimSaga;
