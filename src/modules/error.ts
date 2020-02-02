// actions
export const ERROR_ACTIONS = {
  OPEN_ERR_DIALOG: "OPEN_ERR_DIALOG" as const,
  CLOSE_ERR_DIALOG: "CLOSE_ERR_DIALOG" as const
};

// action creaters
export const openErrDialog = () => {
  return {
    type: ERROR_ACTIONS.OPEN_ERR_DIALOG,
    payload: {
      errTitle: "えらー",
      errMsg: "えらー起きてる"
    }
  };
};

export const closeErrDialog = () => {
  return {
    type: ERROR_ACTIONS.CLOSE_ERR_DIALOG
  };
};

type ActionTypes = ReturnType<typeof openErrDialog | typeof closeErrDialog>;

// reducer
type StateTypes = {
  openErrDialog: boolean;
  errMsg: string;
  errTitle: string;
};

const initialState: StateTypes = {
  openErrDialog: false,
  errMsg: "",
  errTitle: ""
};

const error = (state = initialState, action: ActionTypes): StateTypes => {
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
      return state;
  }
};

export default error;
