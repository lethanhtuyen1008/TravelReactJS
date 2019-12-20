import { compose, createStore, applyMiddleware } from "redux";
import { createBrowserHistory } from "history";
import createSagaMiddleware from "redux-saga";
import RootReducer from "./reducer";
import RootSagas from "./saga";

const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initialState) {
  const store = createStore(
    RootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );
  sagaMiddleware.run(RootSagas);
  return store;
}
export { history };
