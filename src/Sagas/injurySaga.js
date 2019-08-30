
import { takeEvery, takeLatest, put } from "redux-saga/effects";

function* injurySaga() {
  yield "injury saga";
}

export default injurySaga;
