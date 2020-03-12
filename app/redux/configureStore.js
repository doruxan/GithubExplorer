import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import createSagaMiddleware from "redux-saga";

import repos from "./repos/reducer";
import detail from "./detail/reducer";
import issues from "./issues/reducer";
import prs from "./prs/reducer";
import popup from "./popup/reducer";


import rtoSaga from "./saga/tmbSaga";

const combinedReducer = combineReducers({
  repos: repos,
  detail: detail,
  issues: issues,
  prs: prs,
  popup: popup,
});

const rootReducer = (state, action) => {
  if (action.type === "RESET_APP") {
    state = undefined;
  }
  return combinedReducer(state, action);
};

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rtoSaga);

export default store;
