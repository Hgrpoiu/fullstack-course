import React from "react";
import PropTypes from "prop-types";
import "../index.css";
import { useSelector } from "react-redux";

function Notification(props) {
  const msg = useSelector((state) => state.msgs);

  if (!msg.display) {
    return null;
  }
  

  return (
    <div className="notification">
      {msg.msg}
    </div>
  );
}

Notification.propTypes = {};

export default Notification;
