import * as actionTypes from "../actions/actionTypes";

export default function courseReducer(state = [], action) {
  switch (action.type) {
    case actionTypes.CREATE_COURSE:
      // step 3
      return [...state, { ...action.course }];
    default:
      return state;
  }
}
