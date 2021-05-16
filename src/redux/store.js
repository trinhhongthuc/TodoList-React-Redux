import { createStore } from "redux";
import { combineReducers } from "redux";

import reducers from "./reducers";

const Reducers = combineReducers({
  reducer: reducers,
});

const store = createStore(Reducers);

export default store;
