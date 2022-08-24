import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PrivateRoutes from "./PrivateRoute";
import ZoomedUser from "./ZoomedUser";
import { Routes, Route } from "react-router-dom";
import userServices from "../services/user";

function UserList(props) {
  const [users, setUsers] = useState([]);
  const blogs = useSelector((state) => state.blogs);

  useEffect(() => {
    userServices.getAll().then((r) => {
      setUsers(r);
    });
  }, [blogs]);

  return (
    <div>
      <table>
        <tbody>
          {users
            .map((u) => {
              if (u.blogs.length === 0) {
                return null;
              }

              return (
                <tr key={u.username}>
                  <td>
                    <Link to={`/users/${u.id}`}>{u.username}</Link>
                  </td>
                  <td>{u.blogs.length}</td>
                </tr>
              );
            })
            .filter((u) => u !== null)}
        </tbody>
      </table>
    </div>
  );
}

UserList.propTypes = {};

export default UserList;
