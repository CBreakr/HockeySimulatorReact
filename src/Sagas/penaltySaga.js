
import { takeEvery, takeLatest, put } from "redux-saga/effects";

function* penaltySaga(){
  yield "penalty saga";
}

export default penaltySaga;
