// actions
export const COMMON_ACTIONS = {
  START_PROCESS: "START_PROCESS" as const,
  END_PROCESS: "END_PROCESS" as const,
  SWITCH_NARROW_MODE: "SWITCH_NARROW_MODE" as const,
  GET_MASTER: "GET_MASTER" as const
};

// action creaters
export const getMaster = () => {
  return {
    type: COMMON_ACTIONS.GET_MASTER,
    payload: { isOk: true }
  };
};

export const startProgress = () => {
  return {
    type: COMMON_ACTIONS.START_PROCESS
  };
};

export const switchDispMode = () => {
  return {
    type: COMMON_ACTIONS.SWITCH_NARROW_MODE
  };
};

export const endProgress = () => {
  return {
    type: COMMON_ACTIONS.END_PROCESS
  };
};

type ActionTypes = ReturnType<typeof getMaster | typeof startProgress | typeof endProgress | typeof switchDispMode>;

// reducer
type StateTypes = {
  isProcessing: boolean;
  isNarrowMode: boolean;
  tabs: any[];
};

const initialState: StateTypes = {
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

const common = (state = initialState, action: ActionTypes): StateTypes => {
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
    case "GET_MASTER":
      return {
        ...state,
        isProcessing: action.payload.isOk
      };
    default:
      return state;
  }
};

export default common;
