import { AxiosResponse } from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { endProgress, startProgress } from "../modules/common";
import { openErrDialog } from "../modules/error";
import { getSettingsSuccess, Setting, SETTING_ACTIONS } from "../modules/setting";
import { URLS } from "../resources/configs";
import { ERR_MESSAGES, ERR_TITLES } from "../resources/messages";
import { getByAxios } from "./requests";

export function* getSettings() {
  yield put(startProgress());
  // エラーはいろんな型があるためany
  // const { res, err }: { res: AxiosResponse<Setting[]>; err: any } = yield call(() =>
  //   getByAxios<Setting[]>(URLS.SETTINGS)
  // );
  const { res, err }: { res: AxiosResponse<Setting[]>; err: any } = yield call(
    getByAxios,
    URLS.SETTINGS
  );
  yield put(endProgress());
  if (res && res.status === 200) {
    console.log(res.data);
    yield put(getSettingsSuccess(res.data));
  } else if (err) {
    yield put(openErrDialog(ERR_TITLES.ERROR, ERR_MESSAGES.ERROR));
    console.log(err);
  }
}

export const settings = [takeLatest(SETTING_ACTIONS.GET_SETTINGS, getSettings)];
