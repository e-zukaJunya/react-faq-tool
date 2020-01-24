import { connect } from "react-redux";
import GlobalHeader from "./GlobalHeader";

const mapStateToProps = (state: any) => {
  return {
    tabs: state.common.tabs
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(GlobalHeader);
