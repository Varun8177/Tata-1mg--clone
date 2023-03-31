import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import ProductReducer from "./products/products.reducer"
import { reducer as authReducer } from "./auth/reducer"
// import AdminReducer from "./admin/admin.reducer"
import adressReducer from "./adress/adress.reducer"

const rootReducer = combineReducers({authReducer,
    AdminReducer,
    adressReducer,
    ProductReducer
})

const store = legacy_createStore(rootReducer, compose(applyMiddleware(thunk)))

export default store