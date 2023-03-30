import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import ProductReducer from "./products/products.reducer"

const rootReducer = combineReducers({
    ProductReducer
})

const store = legacy_createStore(rootReducer, compose(applyMiddleware(thunk)))

export default store