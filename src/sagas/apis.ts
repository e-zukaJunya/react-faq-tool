import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
// import { endProcess, startProcess } from "../../Actions/Common";
// import { openErrDialog } from "../../Actions/Error";
// import { getToiletInfoFailure, getToiletInfoSuccess } from "../../Actions/UsageStats";
// import { USAGE_STATS_ACTIONS } from "../../Resourses/ActionTypes";
// import { APP_CONFIGS, URLS } from "../../Resourses/Configs";
// import { ERR_MESSAGES, ERR_TITLES } from "../../Resourses/Messages";

// POST
const postByAxios = async (url: string, body: object, headers: object = {}) => {
  return axios
    .post(url, body, headers)
    .then((res: any) => {
      return { res };
    })
    .catch((err: any) => {
      return { err };
    });
};

// const reqApi = async () => {
//   const url = "";
//   const body = {};
//   const { res, err } = await postByAxios(url, body);
//   if (res && res.status === 200) {
//     // 正常処理
//   } else {
//     // 異常処理
//   }
// };

function* getToiletInfo(action: any) {
  //   //プログレスリングの開始
  //   yield put(startProcess());
  //   //APIコール
  //   const { res, err } = yield call(() => postToiletInfoAsync(URLS.GET_TOILET_STATS, action.payload.facil));
  //   // 400や500エラーの時は、本来はAPI GatewayでstatusCodeを合わせて送るが、今回は200のボディにそのままLambdaでのエラーが入っている
  //   if (res && res.data.statusCode >= 200 && res.data.statusCode < 300) {
  //     // Lambdaで処理が行われて、結果が正常系の場合
  //     // 200系の場合
  //     //プログレスリングの終了、リクエスト成功イベントのput
  //     yield put(endProcess());
  //     yield put(getToiletInfoSuccess(res.data));
  //   } else {
  //     // どこかで異常が起きた場合
  //     //プログレスリングの終了、リクエスト失敗イベントのput、エラーダイアログの開始
  //     yield put(endProcess());
  //     yield put(getToiletInfoFailure(err));
  //     yield put(openErrDialog(ERR_MESSAGES.TOILET_STATS_FETCH_ERR, ERR_TITLES.TOILET_STATS_FETCH_ERR));
  //   }
}

export const apiReqs = [takeLatest("GET_TOILET_INFO", getToiletInfo)];
