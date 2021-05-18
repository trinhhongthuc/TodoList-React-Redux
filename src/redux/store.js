import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "./reducers";

import RootSaga from "./saga/RootSaga";

const sagaMiddleware = createSagaMiddleware();

const Reducers = combineReducers({
  reducer: reducers,
});

const store = createStore(Reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(RootSaga);

export default store;
