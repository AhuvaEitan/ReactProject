import { combineReducers, createStore } from "redux"
import { productsReducer } from "./productsSlice/productsSlice"
import { managersReducer } from "./managersSlice/managersSlice.js"
import { userReducer } from "./userSlice/userSlice.js"

const reducer = combineReducers({
    products: productsReducer,
    managers: managersReducer,
    user: userReducer
})

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())