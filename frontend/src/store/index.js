import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import sessionReducer from "./session";
import searchReducer from "./search";
import listReducer from "./lists";
import movieReducer from "./movies";
import thoughtReducer from "./thoughts";

const rootReducer = combineReducers({
  session: sessionReducer,
  search: searchReducer,
  list: listReducer,
  movie: movieReducer,
  thought: thoughtReducer,
});

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = preloadedState => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
