import { all } from "redux-saga/effects";
import { apiReqs } from "./masters";

export default function* rootSaga() {
  yield all([...apiReqs]);
}
