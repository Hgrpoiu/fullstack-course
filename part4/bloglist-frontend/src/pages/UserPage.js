import React from "react";
import PropTypes from "prop-types";
import UserList from "../components/UserList";

function UserPage(props) {
  return (
    <div>
      <UserList/>
    </div>
  );
}

UserPage.propTypes = {};

export default UserPage;
