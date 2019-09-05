
import { takeEvery, takeLatest, put } from "redux-saga/effects";

function* injurySaga() {
  console.log("injury saga");
  yield "injury saga";
}

export default injurySaga;
