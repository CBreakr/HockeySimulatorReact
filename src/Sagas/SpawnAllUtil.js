
import { all, spawn, call } from "redux-saga/effects";

// from the redux-saga documentation
export function* spawnAllRestartingSagas(sagas){
  yield all(sagas.map(saga =>
    spawn(function* () {
      console.log("start inner saga", saga);

      while (true) {
        try {
          yield call(saga)
          break
        } catch (e) {
          console.log(e)
        }
      }
    }))
  );
}
