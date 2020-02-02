import { connect } from "react-redux";
import { Action, Dispatch } from "redux";
import { getSettings } from "../../modules/setting";
import { rootReducer } from "../../store";
import Settings from "./Settings";

const mapStateToProps = (state: ReturnType<typeof rootReducer>) => {
  return {
    settings: state.setting.settings
  };
};

const mapDispatchToProps = (dispatch: Dispatch<Action<string>>) => {
  return {
    getSettings: () => dispatch(getSettings())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;
export type Props = StateProps & DispatchProps;
