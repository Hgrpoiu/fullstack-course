import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useField } from "../hooks/useField";
import { setNotif } from "../reducers/msgReducer";
import { setUser } from "../reducers/userReducer";
import login from "../services/login"
import services from "../services/blogs";
import {useNavigate} from "react-router-dom"

function Login(props) {
  const [username, userReset] = useField("username");
  const [password, passReset] = useField("password");

  const dispatch = useDispatch();
  const nav=useNavigate()

  async function submit(e) {
    e.preventDefault();
    passReset();
    userReset();

    try {
      console.log("Before")
      const user={
        username: username.value,
        password: password.value,
      }
      const response = await login(user);
      
      dispatch(setUser(response));
      
      window.localStorage.setItem("loggedinUser", JSON.stringify(response));
      services.setToken(response.token);
      dispatch(setNotif("Logged in!", 5));
      nav("/blogs")
    } catch {
      dispatch(setNotif("Bad login! Try a different combo!!", 5));
      //ERROR HANDLING HERE
    }
  }

  return (
    <div className="login">
      <h2>Login</h2>
      <form
        onSubmit={(e) => {
          submit(e);
        }}
      >
        Login:
        <input id="username" {...username} />
        Password:
        <input id="password" type="password" {...password} />
        <button id="login-submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

Login.propTypes = {};

export default Login;
