import { Color } from "@material-ui/lab/Alert";

// actions
export const COMMON_ACTIONS = {
  START_PROCESS: "START_PROCESS" as const,
  END_PROCESS: "END_PROCESS" as const,
  SWITCH_NARROW_MODE: "SWITCH_NARROW_MODE" as const,
  GET_MASTER: "GET_MASTER" as const,
  SHOW_SNACK_BAR: "SHOW_SNACK_BAR" as const,
  HIDE_SNACK_BAR: "HIDE_SNACK_BAR" as const
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

export const endProgress = () => {
  return {
    type: COMMON_ACTIONS.END_PROCESS
  };
};

export const switchDispMode = () => {
  return {
    type: COMMON_ACTIONS.SWITCH_NARROW_MODE
  };
};

export const showSnackBar = (severity: Color) => {
  return {
    type: COMMON_ACTIONS.SHOW_SNACK_BAR,
    payload: { severity }
  };
};

export const hideSnackBar = () => {
  return {
    type: COMMON_ACTIONS.HIDE_SNACK_BAR
  };
};

type ActionTypes = ReturnType<
  | typeof getMaster
  | typeof startProgress
  | typeof endProgress
  | typeof switchDispMode
  | typeof showSnackBar
  | typeof hideSnackBar
>;

const strEnum = <T extends string>(o: Array<T>): { [K in T]: K } => {
  return o.reduce((res, key) => {
    res[key] = key;
    return res;
  }, Object.create(null));
};
export const Severity = strEnum(["info", "succes", "warning", "error"]);

// reducer
type StateTypes = {
  isProcessing: boolean;
  isNarrowMode: boolean;
  showSnackBar: boolean;
  snackBarSeverity?: Color;
  tabs: any[];
};

const initialState: StateTypes = {
  isProcessing: false,
  isNarrowMode: false,
  showSnackBar: false,
  snackBarSeverity: undefined,
  tabs: [
    { category: "ダッシュボード", pages: [{ id: "", name: "ダッシュボード" }] },
    {
      category: "KB管理",
      pages: [
        { id: "kbAdd", name: "追加" },
        { id: "kbEdit", name: "編集" },
        { id: "kbApply", name: "適用" }
        // { id: "kbTest", name: "テスト" },
        // { id: "kbTrain", name: "訓練" },
        // { id: "kbPublish", name: "公開" }
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
    //スナックバーの表示
    case COMMON_ACTIONS.SHOW_SNACK_BAR:
      return {
        ...state,
        showSnackBar: true,
        snackBarSeverity: action.payload.severity
      };
    //スナックバーの非表示
    case COMMON_ACTIONS.HIDE_SNACK_BAR:
      return {
        ...state,
        showSnackBar: false
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
