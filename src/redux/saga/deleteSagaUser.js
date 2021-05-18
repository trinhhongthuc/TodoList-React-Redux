import { put, takeEvery, call } from "redux-saga/effects";

const actionsDelete = (type, data) => {
  return {
    type: type,
    payload: data,
  };
};

function* watchDeleteSaga(data) {
  const DataAction = data.payload;
  const type = "DELETE_REDUCER";
  try {
    const result = yield call(() => actionsDelete(type, DataAction));
    yield put(result);
  } catch (error) {
    console.log(error);
  }
}

function* DeleteSagaUser() {
  yield takeEvery("DELETE_SAGA", watchDeleteSaga);
}

export default DeleteSagaUser;
