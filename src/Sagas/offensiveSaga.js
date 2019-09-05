
import { takeEvery, takeLatest, put } from "redux-saga/effects";

function* offensiveSaga(){
  console.log("offensive saga");
  yield "offensive saga";
}

export default offensiveSaga;
