import { all } from "redux-saga/effects";
import { master } from "./master";

export default function* rootSaga() {
  yield all([...master]);
}
