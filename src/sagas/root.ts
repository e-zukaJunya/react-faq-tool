import { all } from "redux-saga/effects";
import { masters } from "./masters";
import { settings } from "./settings";

export default function* rootSaga() {
  yield all([...masters, ...settings]);
}
