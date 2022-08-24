import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import Login from "./Login";

function LoginScreen(props) {
  return (
    <div>
      <Login />
    </div>
  );
}

LoginScreen.propTypes = {};

export default LoginScreen;
