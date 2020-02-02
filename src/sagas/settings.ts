import { call, put, takeLatest } from "redux-saga/effects";
import { getByAxios, postByAxios } from "./requests";
import { SETTING_ACTIONS, getSettingsSuccess } from "../modules/setting";
import { URLS } from "../resources/configs";
import { Setting } from "../modules/setting";
import { ERR_MESSAGES, ERR_TITLES } from "../resources/messages";
import axios, { AxiosResponse } from "axios";

function* getSettings() {
  // エラーはいろんな型があるためany
  const { res, err }: { res: AxiosResponse<Setting[]>; err: any } = yield call(() =>
    getByAxios<Setting[]>(URLS.SETTINGS)
  );
  console.log(res.data);
  if (res.status === 200) {
    // yield put(endProcess());
    yield put(getSettingsSuccess(res.data));
  } else if (err) {
    console.log(err);
  }
}

export const settings = [takeLatest(SETTING_ACTIONS.GET_SETTINGS, getSettings)];
