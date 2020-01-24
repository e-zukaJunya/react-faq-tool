import * as redux from "redux";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import common from "./reducers/common";
// import { APP_CONFIGS } from "./Resourses/Configs";
import rootSaga from "./sagas/root";

const rootReducer = redux.combineReducers({ common });

// いろんな型のミドルウェアを登録するためここはany
const middlewares: any = [];

//開発時のみredux-loggerを適用
// if (APP_CONFIGS.IS_DEVELOP) {
if (true) {
  //loggerオブジェクトの生成
  const logger = createLogger({
    diff: true,
    collapsed: true
  });
  //loggerオブジェクトをmiddlewaresへ追加
  middlewares.push(logger);
}

//storeを生成する関数
export const configureStore = () => {
  //sagaMiddlewareオブジェクトの生成とmiddlewaresへの追加
  const sagaMiddleware = createSagaMiddleware();
  middlewares.push(sagaMiddleware);
  //storeの設定
  const store = redux.createStore(rootReducer, redux.applyMiddleware(...middlewares));
  //sagaMiddlewareの開始
  sagaMiddleware.run(rootSaga);
  return store;
};
