import React from "react";
import "../index.css";
import PropTypes from "prop-types";

function Notification(props) {
  if (props.message === null) {
    return null;
  }
  setTimeout(() => {
    props.setMsg(null);
  }, 5000);
  console.log(props.error);
  props.setError(false);
  return <div className={props.error?"error":"notification"}>{props.message}</div>;
}

Notification.propTypes = {};

export default Notification;
