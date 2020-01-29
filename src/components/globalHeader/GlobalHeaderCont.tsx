import { connect } from "react-redux";
import GlobalHeader from "./GlobalHeader";

const mapStateToProps = (state: any) => {
  return {
    tabs: state.common.tabs
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    // getMaster: () => dispatch(closeErrDialog()),
    getMaster: () =>
      dispatch({
        type: "GET_MASTER",
        payload: { isOk: true }
      })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GlobalHeader);
