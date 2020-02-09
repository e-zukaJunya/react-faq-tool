// #region actions
export const SETTING_ACTIONS = {
  GET_SETTINGS: "GET_SETTINGS" as const,
  GET_SETTINGS_SUCCESS: "GET_SETTINGS_SUCCESS" as const,
  UPDATE_SETTINGS: "UPDATE_SETTINGS" as const,
  UPDATE_SETTINGS_SUCCESS: "UPDATE_SETTINGS_SUCCESS" as const,
  UPDATE_SETTINGS_FAILURE: "UPDATE_SETTINGS_FAILURE" as const
};
// #endregion

// #region action creaters
export const getSettings = () => {
  return {
    type: SETTING_ACTIONS.GET_SETTINGS
  };
};
export const getSettingsSuccess = (data: Setting[]) => {
  return {
    type: SETTING_ACTIONS.GET_SETTINGS_SUCCESS,
    payload: { data }
  };
};
export const updateSettings = (data: Setting) => {
  return {
    type: SETTING_ACTIONS.UPDATE_SETTINGS,
    payload: { data }
  };
};
export const updateSettingsSuccess = () => {
  return {
    type: SETTING_ACTIONS.UPDATE_SETTINGS_SUCCESS
  };
};
export const updateSettingsFailure = () => {
  return {
    type: SETTING_ACTIONS.UPDATE_SETTINGS_FAILURE
  };
};

type ActionTypes = ReturnType<
  | typeof getSettingsSuccess
  | typeof updateSettings
  | typeof updateSettingsSuccess
  | typeof updateSettingsFailure
>;
// #endregion

// #region reducer
export type Setting = {
  id: number;
  name: string;
  value: string | number;
};

export type StateTypes = {
  settings: Setting[];
  isLoading: boolean;
};

const initialState: StateTypes = {
  settings: [
    { id: 1, name: "なんか", value: 100 },
    { id: 2, name: "いろいろな", value: 100 },
    { id: 3, name: "項目", value: "23:59" },
    { id: 4, name: "です", value: 100 }
  ],
  isLoading: false
};

const setting = (state = initialState, action: ActionTypes): StateTypes => {
  switch (action.type) {
    case SETTING_ACTIONS.GET_SETTINGS_SUCCESS:
      return {
        ...state,
        settings: action.payload.data
      };
    case SETTING_ACTIONS.UPDATE_SETTINGS:
      return {
        ...state,
        isLoading: true
      };
    case SETTING_ACTIONS.UPDATE_SETTINGS_SUCCESS:
      return {
        ...state,
        isLoading: false
      };
    case SETTING_ACTIONS.UPDATE_SETTINGS_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};
// #endregion

export default setting;
