
import { takeEvery, takeLatest, put } from "redux-saga/effects";

function* possessionSaga(){
  yield "possession saga";
}

export default possessionSaga;
