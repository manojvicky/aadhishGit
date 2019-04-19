import { connect } from "react-redux";
import { hitApi, normalAction } from "./actions";
import App from "./App";

const mapStateToProps = state => {
  console.log("container", state);
  return {
    counter: state.demo,
    data: state.ApiReducer.data
  };
};
const mapActionToDispatch = dispatch => {
  return {
    hitIt: () => dispatch(hitApi()),
    counterAction: () => dispatch(normalAction())
  };
};
export default connect(
  mapStateToProps,
  mapActionToDispatch
)(App);
