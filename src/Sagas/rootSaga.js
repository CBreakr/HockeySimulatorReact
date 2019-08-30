
import { spawnAllRestartingSagas } from "./SpawnAllUtil";

import gameSimSaga from "./gameSimSaga";

function* rootSaga () {
  console.log("root saga");

  const sagas = [
    gameSimSaga
  ];

  yield spawnAllRestartingSagas(sagas);
}

export default rootSaga;
