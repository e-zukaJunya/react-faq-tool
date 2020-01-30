// actions
export const COMMON_ACTIONS = {
  START_PROCESS: "START_PROCESS",
  END_PROCESS: "END_PROCESS",
  SWITCH_NARROW_MODE: "SWITCH_NARROW_MODE",
  GET_MASTER: "GET_MASTER"
};

// action creaters
export const getMaster = () => {
  return {
    type: "GET_MASTER",
    payload: { isOk: true }
  };
};

export const startProgress = () => {
  return {
    type: COMMON_ACTIONS.START_PROCESS
  };
};

export const endProgress = () => {
  return {
    type: COMMON_ACTIONS.END_PROCESS
  };
};

type ActionTypes =
  | ReturnType<typeof getMaster>
  | ReturnType<typeof startProgress>
  | ReturnType<typeof endProgress>;

// reducer
const initialState = {
  isProcessing: false,
  isNarrowMode: false,
  tabs: [
    { category: "ダッシュボード", pages: [{ id: "", name: "ダッシュボード" }] },
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

const common = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    //プログレスリングの開始
    case COMMON_ACTIONS.START_PROCESS:
      return {
        ...state,
        isProcessing: true
      };
    //プログレスリングの終了
    case COMMON_ACTIONS.END_PROCESS:
      return {
        ...state,
        isProcessing: false
      };
    //画面幅による表示モードの切り替え
    case COMMON_ACTIONS.SWITCH_NARROW_MODE:
      return {
        ...state,
        isNarrowMode: !state.isNarrowMode
      };
    default:
      return {
        ...state
      };
  }
};

export default common;
