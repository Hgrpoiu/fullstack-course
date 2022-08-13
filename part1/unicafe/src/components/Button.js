import React from "react";
import PropTypes from "prop-types";

function Button(props) {
  return <button onClick={props.handleClick}>{props.text}</button>;
}

Button.propTypes = {};

export default Button;
