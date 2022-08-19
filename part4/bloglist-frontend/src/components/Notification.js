import React from "react";
import PropTypes from "prop-types";
import "../index.css"

function Notification(props) {
  if (props.message === null) {
    return null;
  }

  return (
    <div className={props.error ? "error" : "notification"}>
      {props.message}
    </div>
  );
}

Notification.propTypes = {};

export default Notification;
