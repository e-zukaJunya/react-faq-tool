// actions
export const ERROR_ACTIONS = {
  OPEN_ERR_DIALOG: "OPEN_ERR_DIALOG",
  CLOSE_ERR_DIALOG: "CLOSE_ERR_DIALOG"
};

// action creaters

// reducer
const initialState = {
  openErrDialog: false,
  errMsg: "",
  errTitle: ""
};

const error = (state = initialState, action: any) => {
  switch (action.type) {
    //エラーダイアログを表示
    case ERROR_ACTIONS.OPEN_ERR_DIALOG:
      return {
        ...state,
        openErrDialog: true,
        errMsg: action.payload.errMsg,
        errTitle: action.payload.errTitle
      };
    //エラーダイアログを非表示
    case ERROR_ACTIONS.CLOSE_ERR_DIALOG:
      return {
        ...state,
        openErrDialog: false,
        errMsg: "",
        errTitle: ""
      };
    default:
      return {
        ...state
      };
  }
};

export default error;
