
import { takeLatest, put } from "redux-saga/effects";

import { spawnAllRestartingSagas } from "./SpawnAllUtil";

import metaGameSaga from "./metaGameSaga";
import injurySaga from "./injurySaga";
import penaltySaga from "./penaltySaga";
import possessionSaga from "./possessionSaga";
import offensiveSaga from "./offensiveSaga";

function* gameSimSaga() {

  const sagas = [
    metaGameSaga,
    injurySaga,
    penaltySaga,
    possessionSaga,
    offensiveSaga
  ]

  yield spawnAllRestartingSagas(sagas);
}

export default gameSimSaga;
