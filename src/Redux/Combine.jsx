import { combineReducers } from "redux";
import Reducers from "./Reducers";
const root = combineReducers({
  items: Reducers,
});

export default root;
