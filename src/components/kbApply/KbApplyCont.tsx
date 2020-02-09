import { connect } from "react-redux";
import { Action, Dispatch } from "redux";
import { getMaster } from "../../modules/common";
import { rootReducer } from "../../store";
import KbApply from "./KbApply";

const mapStateToProps = (state: ReturnType<typeof rootReducer>) => {
  return {
    tabs: state.common.showSnackBar,
    severity: state.common.snackBarSeverity
  };
};

const mapDispatchToProps = (dispatch: Dispatch<Action<string>>) => {
  return {
    getMaster: () => dispatch(getMaster())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(KbApply);

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;
export type Props = StateProps & DispatchProps;
