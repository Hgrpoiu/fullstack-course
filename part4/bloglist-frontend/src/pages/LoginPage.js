import React from "react";
import PropTypes from "prop-types";
import Notification from "../components/Notification";
import LoginScreen from "../components/LoginScreen";

function LoginPage(props) {
  return (
    <div>
      <Notification />
      <LoginScreen />
    </div>
  );
}

LoginPage.propTypes = {};

export default LoginPage;
