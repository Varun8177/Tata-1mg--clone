import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import AdminReducer from "./admin/admin.reducer";

const rootReducer = combineReducers({
    AdminReducer
})

const store = legacy_createStore(rootReducer, compose(applyMiddleware(thunk)))

export default store