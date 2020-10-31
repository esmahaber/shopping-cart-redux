import * as actionType from "../actions/actionTypes";
import initialState from "./initialState";

export default function changeCategoryREducer(
  state = initialState.currentCategory,
  action
) {
  switch (actionType) {
    case actionType.CHANGE_CATEGORY:
      return action.payload;
    default:
      return state;
  }
}
