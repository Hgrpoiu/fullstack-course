import React from "react";
import PropTypes from "prop-types";

function Header(props) {
  return (
    <h1>{props.course}</h1>
  )
}

Header.propTypes = {};

export default Header;
