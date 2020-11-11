import * as actionType from "../actions/actionTypes";
import initialState from "./initialState";

export default function changeCategoryReducer(
  state = initialState.categories,
  action
) {
  switch (action.type) {
    case actionType.GET_CATEGORY_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
