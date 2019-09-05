
import { takeEvery, takeLatest, put } from "redux-saga/effects";

function* penaltySaga(){
  console.log("penalty saga");
  yield "penalty saga";
}

export default penaltySaga;
