import { call, put, takeEvery } from "redux-saga/effects";

import { addToList } from "../action";

function* watchAdd(data) {
  try {
    yield put({ type: "ADD_REDUCER", payload: data.payload });
  } catch (error) {
    console.log(error);
  }
}

function* Sagacontroller() {
  yield takeEvery("ADD_SAGA", watchAdd);
}

export default Sagacontroller;
