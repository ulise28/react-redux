import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function authorReducer(state = initialState.authors, action) {
  // step 3
  switch (action.type) {
    case actionTypes.LOAD_AUTHORS_SUCCESS:
      return action.authors;
    default:
      return state;
  }
}
