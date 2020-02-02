import { call, put, takeLatest } from "redux-saga/effects";
import { postByAxios } from "./requests";
import { COMMON_ACTIONS } from "../modules/common";
// import { ERR_MESSAGES, ERR_TITLES } from "../../Resourses/Messages";

function* getMaster(action: any) {
  //プログレスリングの開始
  // yield put(startProcess());
  //APIコール
  // const { res, err } = yield call(() => postByAxios(URLS.GET_TOILET_STATS, action.payload.facil));
  console.log(action.payload);
  const { res, err } = yield call(() => postByAxios("", { isOk: action.payload.isOk }));
  // 400や500エラーの時は、本来はAPI GatewayでstatusCodeを合わせて送るが、今回は200のボディにそのままLambdaでのエラーが入っている
  if (res && res.data.statusCode >= 200 && res.data.statusCode < 300) {
    // Lambdaで処理が行われて、結果が正常系の場合
    // 200系の場合
    //プログレスリングの終了、リクエスト成功イベントのput
    // yield put(endProcess());
    // yield put(getToiletInfoSuccess(res.data));
  } else {
    // どこかで異常が起きた場合
    //プログレスリングの終了、リクエスト失敗イベントのput、エラーダイアログの開始
    // yield put(endProcess());
    // yield put(getToiletInfoFailure(err));
    // yield put(
    //   openErrDialog(ERR_MESSAGES.TOILET_STATS_FETCH_ERR, ERR_TITLES.TOILET_STATS_FETCH_ERR)
    // );
  }
}

export const masters = [takeLatest(COMMON_ACTIONS.GET_MASTER, getMaster)];
