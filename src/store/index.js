import { legacy_createStore as createStore, applyMiddleware, compose } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers/index";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk] //not necessary, configureStore has redux-thunk and devtools extension turned on by default
})

// const store = createStore(
//   rootReducer,
//   compose(applyMiddleware(thunk),
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// )

export default store;