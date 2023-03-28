import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({})

const store = legacy_createStore(rootReducer, compose(applyMiddleware(thunk)))

export default store