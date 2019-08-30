
import { takeEvery, takeLatest, put } from "redux-saga/effects";

function* offensiveSaga(){
  yield "offensive saga";
}

export default offensiveSaga;
