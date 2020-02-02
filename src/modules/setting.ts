// actions
export const SETTING_ACTIONS = {
  GET_SETTINGS: "GET_SETTINGS" as const,
  GET_SETTINGS_SUCCESS: "GET_SETTINGS_SUCCESS" as const,
  PUT_SETTINGS: "PUT_SETTINGS" as const
};

// action creaters
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
export const putSettings = () => {
  return {
    type: SETTING_ACTIONS.PUT_SETTINGS,
    payload: { isOk: true }
  };
};

type ActionTypes = ReturnType<typeof getSettingsSuccess | typeof putSettings>;

// reducer
export type Setting = {
  id: number;
  name: string;
  value: string | number;
};

export type StateTypes = {
  settings: Setting[];
};

const initialState: StateTypes = {
  settings: [
    { id: 1, name: "なんか", value: 100 },
    { id: 2, name: "いろいろな", value: 100 },
    { id: 3, name: "項目", value: "23:59" },
    { id: 4, name: "です", value: 100 }
  ]
};

const setting = (state = initialState, action: ActionTypes): StateTypes => {
  switch (action.type) {
    case SETTING_ACTIONS.GET_SETTINGS_SUCCESS:
      return {
        ...state,
        settings: action.payload.data
      };
    case SETTING_ACTIONS.PUT_SETTINGS:
      return {
        ...state
        // settings: []
      };
    default:
      return state;
  }
};

export default setting;
