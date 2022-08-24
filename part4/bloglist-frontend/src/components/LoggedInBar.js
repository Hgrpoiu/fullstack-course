import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../reducers/userReducer";

function LoggedInBar(props) {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  function handleLogout(e) {
    e.preventDefault();
    dispatch(setUser(null));

    window.localStorage.removeItem("loggedinUser");
  }

  if (!user) {
    return <div></div>;
  }

  return (
    <>
      <p>{user.name} is logged in.</p>{" "}
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}

LoggedInBar.propTypes = {};

export default LoggedInBar;
