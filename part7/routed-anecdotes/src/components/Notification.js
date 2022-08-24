import React, { forwardRef, useImperativeHandle, useState } from "react";
import PropTypes from "prop-types";

const Notification = forwardRef((props, ref) => {
  const [msg, setStateMsg] = useState(null);
  function setMsg(m) {
    setStateMsg(m);
  }

  useImperativeHandle(ref, () => {
    return { setMsg };
  });

  if (msg && props.msg) {
    return null;
  }

  
  if (props.msg) {
    return <div>{props.msg}</div>;
  }
  return <div>{msg}</div>;
});

Notification.propTypes = {};

export default Notification;
