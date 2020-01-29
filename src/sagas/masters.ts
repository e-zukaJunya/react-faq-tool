import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { URLS } from "../resources/config";
// import { endProcess, startProcess } from "../../Actions/Common";
// import { openErrDialog } from "../../Actions/Error";
// import { getToiletInfoFailure, getToiletInfoSuccess } from "../../Actions/UsageStats";
// import { USAGE_STATS_ACTIONS } from "../../Resourses/ActionTypes";
// import { APP_CONFIGS, URLS } from "../../Resourses/Configs";
// import { ERR_MESSAGES, ERR_TITLES } from "../../Resourses/Messages";

const baseUrl = "http://localhost:3100/";
const axiosInstance = axios.create({
  baseURL: URLS.BASE
});

// GET
const getByAxios = async (url: string, { headers = {}, params = {} } = {}) => {
  return axios
    .get(url, { headers, params })
    .then(res => {
      return { res };
    })
    .catch(err => {
      return { err };
    });
};

// POST
const postByAxios = async (url: string, body: object, { headers = {}, params = {} } = {}) => {
  return axiosInstance
    .post(url, body, { headers, params })
    .then((res: any) => {
      return { res };
    })
    .catch((err: any) => {
      return { err };
    });
};

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

export const apiReqs = [takeLatest("GET_MASTER", getMaster)];
