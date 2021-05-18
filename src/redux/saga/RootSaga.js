import { all } from "redux-saga/effects";

import Sagacontroller from "./Sagacontroller";
import DeleteSagaUser from "./deleteSagaUser";
function* RootSaga() {
  yield all([Sagacontroller(), DeleteSagaUser()]);
}

export default RootSaga;
