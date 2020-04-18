import * as actionTypes from "./actionTypes";

export function createCourse(course) {
  //step 2
  return { type: actionTypes.CREATE_COURSE, course };
}
