import { useState, useEffect, useRef } from "react";

import services from "./services/blogs";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./reducers/userReducer";
import PrivateRoutes from "./components/PrivateRoute";
import LoginPage from "./pages/LoginPage";
import BlogPage from "./pages/BlogPage";
import UserPage from "./pages/UserPage";
import Mover from "./components/Mover";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import ZoomedUser from "./components/ZoomedUser";
import userServices from "./services/user";
import ZoomedBlog from "./components/ZoomedBlog";

const App = () => {
  const [users, setUsers] = useState([]);
  const stateUser = useSelector((state) => state.user);
  const blogs = useSelector((state) => state.blogs);

  const dispatch = useDispatch();
  const nav = useNavigate();

  useEffect(() => {
    const localuser = window.localStorage.getItem("loggedinUser");
    if (localuser) {
      const parsed = JSON.parse(localuser);
      dispatch(setUser(parsed));
      services.setToken(parsed.token);
      nav("/blogs");
    }
  }, []);

  useEffect(() => {
    userServices.getAll().then((r) => setUsers(r));
  }, [blogs]);

  console.log("Constant rerender check");

  return (
    <Mover title="Joey's Blogger!">
      <Routes>
        <Route path="/" element={<LoginPage />} exact />
        <Route element={<PrivateRoutes conditional={stateUser} to="/" />}>
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/users/" element={<UserPage />} />
          {users.map((u) => {
            return (
              <Route
                key={u.id}
                path={`/users/${u.id}`}
                element={<ZoomedUser name={u.name} blogList={u.blogs} />}
              />
            );
          })}
          {blogs.map((b) => {
            return (
              <Route
                key={b.title}
                path={`/blogs/${b.id}`}
                element={<ZoomedBlog blog={b} />}
              />
            );
          })}
        </Route>
      </Routes>
    </Mover>
  );
};

export default App;
