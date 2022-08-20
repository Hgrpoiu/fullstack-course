import { setMsg } from "../reducers/msgReducer";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";

const Notification = (props) => {
  let style = {
    display: "",
    border: "solid",
    padding: 10,
    borderWidth: 1,
  };
  if (!props.msg.display) {
    style = { display: "none" };
  }
  return <div style={style}>{props.msg.msg}</div>;
};

function mapStateToProps(state) {
  return {
    ance: state.ance,
    msg: state.msg,
    filter: state.filter,
  };
}

//export default Notification
export default connect(mapStateToProps)(Notification);
