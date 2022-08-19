import React from "react";
import PropTypes from "prop-types";

function Login(props) {
  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={props.submit}>
        Login:
        <input
        id="username"
          value={props.loginVal}
          onChange={(e) => {
            props.setloginVal(e.target.value);
          }}
        />
        Password:
        <input
        id="password"
          type="password"
          value={props.passVal}
          onChange={(e) => {
            props.setpassVal(e.target.value);
          }}
        />
        <button id="login-submit"type="submit">Submit</button>
      </form>
    </div>
  );
}

Login.propTypes = {};

export default Login;
