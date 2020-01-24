// import { COMMON_ACTIONS } from '../Resourses/ActionTypes';

const initialState = {
  isProcessing: false,
  isNarrowMode: false,
  tabs: [
    { category: "ダッシュボード", pages: [{ id: "dashboard", name: "ダッシュボード" }] },
    {
      category: "KB管理",
      pages: [
        { id: "kbAdd", name: "追加" },
        { id: "kbEdit", name: "編集" },
        { id: "kbTest", name: "テスト" },
        { id: "kbTrain", name: "訓練" },
        { id: "kbPublish", name: "公開" }
      ]
    },
    { category: "設定", pages: [{ id: "settings", name: "設定" }] }
  ]
};

const common = (state = initialState, action: any) => {
  switch (action.type) {
    //プログレスリングの開始
    // case COMMON_ACTIONS.START_PROCESS:
    case "START_PROCESS":
      return {
        ...state,
        isProcessing: true
      };

    //プログレスリングの終了
    case "END_PROCESS":
      return {
        ...state,
        isProcessing: false
      };

    //画面幅による表示モードの切り替え
    case "SWITCH_NARROW_MODE":
      return {
        ...state,
        isNarrowMode: action.payload.isNarrowMode
      };

    default:
      return {
        ...state
      };
  }
};

export default common;
