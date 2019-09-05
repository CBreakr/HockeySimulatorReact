
import { takeEvery, takeLatest, put } from "redux-saga/effects";

function* possessionSaga(){
  console.log("possession saga");
  yield "possession saga";
}

export default possessionSaga;
