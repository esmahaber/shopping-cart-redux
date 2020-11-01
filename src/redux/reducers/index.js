import { combineReducers } from "redux";
import changeCategoryReducer from "./changeCategoryReducer";

export const rootReducer = combineReducers({
  changeCategoryReducer,
});
