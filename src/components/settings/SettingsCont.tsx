import { connect } from "react-redux";
import { Action, Dispatch } from "redux";
import { getSettings, updateSettings, Setting } from "../../modules/setting";
import { rootReducer } from "../../store";
import Settings from "./Settings";

const mapStateToProps = (state: ReturnType<typeof rootReducer>) => {
  return {
    settings: state.setting.settings,
    isLoading: state.setting.isLoading
  };
};

const mapDispatchToProps = (dispatch: Dispatch<Action<string>>) => {
  return {
    getSettings: () => dispatch(getSettings()),
    updateSettings: (data: Setting) => dispatch(updateSettings(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;
export type Props = StateProps & DispatchProps;
