import common, {
  COMMON_ACTIONS,
  getMaster,
  startProgress,
  endProgress,
  switchDispMode,
  showSnackBar,
  hideSnackBar,
  Severity
} from "modules/common";

// jest.mock("sagas/requests", () => jest.fn());

describe("action creaters", () => {
  it("getMaster", () => {
    const obj = {
      type: COMMON_ACTIONS.GET_MASTER,
      payload: { isOk: true }
    };
    expect(getMaster()).toEqual(obj);
  });
  it("startProgress", () => {
    const obj = {
      type: COMMON_ACTIONS.START_PROCESS
    };
    expect(startProgress()).toEqual(obj);
  });
  it("endProgress", () => {
    const obj = {
      type: COMMON_ACTIONS.END_PROCESS
    };
    expect(endProgress()).toEqual(obj);
  });
  it("switchDispMode", () => {
    const obj = {
      type: COMMON_ACTIONS.SWITCH_NARROW_MODE
    };
    expect(switchDispMode()).toEqual(obj);
  });
  it("showSnackBar", () => {
    const severitySucces = Severity.succes;
    const successObj = {
      type: COMMON_ACTIONS.SHOW_SNACK_BAR,
      payload: { severity: severitySucces }
    };
    expect(showSnackBar(severitySucces)).toEqual(successObj);

    const severityError = Severity.error;
    const errorObj = {
      type: COMMON_ACTIONS.SHOW_SNACK_BAR,
      payload: { severity: severityError }
    };
    expect(showSnackBar(severityError)).toEqual(errorObj);
  });
  it("hideSnackBar", () => {
    const obj = {
      type: COMMON_ACTIONS.HIDE_SNACK_BAR
    };
    expect(hideSnackBar()).toEqual(obj);
  });
});

describe("reducer", () => {
  let state;
  beforeEach(() => {
    state = {
      isProcessing: false,
      isNarrowMode: false,
      showSnackBar: false,
      snackBarSeverity: undefined,
      tabs: [
        { category: "ダッシュボード", pages: [{ id: "", name: "ダッシュボード" }] },
        {
          category: "KB",
          pages: [
            { id: "kbAdd", name: "追加" },
            { id: "kbEdit", name: "編集" },
            { id: "kbApply", name: "適用" }
          ]
        },
        {
          category: "マスタ",
          pages: [
            { id: "category", name: "QAカテゴリ" },
            { id: "others", name: "その他" }
          ]
        },
        { category: "設定", pages: [{ id: "settings", name: "設定" }] }
      ]
    };
  });

  it("should return the initial state", () => {
    expect(common(undefined, {})).toEqual(state);
  });

  it("should handle START_PROCESS", () => {
    const res = common(state, startProgress());
    state.isProcessing = true;
    expect(res).toEqual(state);
  });
  it("should handle END_PROCESS", () => {
    const res = common(state, endProgress());
    state.isProcessing = false;
    expect(res).toEqual(state);
  });
  it("should handle SWITCH_NARROW_MODE", () => {
    const res = common(state, switchDispMode());
    state.isNarrowMode = !state.isNarrowMode;
    expect(res).toEqual(state);
  });
  it("should handle SHOW_SNACK_BAR", () => {
    const severity = Severity.succes;
    const res = common(state, showSnackBar(severity));
    state.showSnackBar = true;
    state.snackBarSeverity = severity;
    expect(res).toEqual(state);
  });
  it("should handle HIDE_SNACK_BAR", () => {
    const res = common(state, hideSnackBar());
    state.showSnackBar = false;
    expect(res).toEqual(state);
  });
  it("should handle GET_MASTER", () => {
    const res = common(state, getMaster());
    state.isProcessing = true;
    expect(res).toEqual(state);
  });
});
