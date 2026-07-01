import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { thunk } from "redux-thunk";
import root from "./Combine";

const store = createStore(root, applyMiddleware(thunk));

export default store;
