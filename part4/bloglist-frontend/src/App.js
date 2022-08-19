import { useState, useEffect, useRef } from "react";
import Blog from "./components/Blog";
import Login from "./components/Login";
import Post from "./components/Post";
import blogService from "./services/blogs";
import login from "./services/login";

import { setToken } from "./services/blogs";
import Notification from "./components/Notification";
import Toggleable from "./components/Toggleable";
import BlogForm from "./components/BlogForm";
import { likeBlog, delBlog } from "./services/blogs";
import { postBlog } from "./services/blogs";

const App = () => {
  const [user, setUser] = useState(null);
  const [blogs, setBlogs] = useState([]);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [notif, setNotif] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const localuser = window.localStorage.getItem("loggedinUser");
    if (localuser) {
      const parsed = JSON.parse(localuser);
      setUser(parsed);
      setToken(parsed.token);
    }
  }, []);

  async function postBlogHandler(title, author, url) {
    notifWrap(`${title} by ${author} was posted!`, false);
    const b = await postBlog(
      {
        title: title,
        author: author,
        url: url,
      },
      user.token
    );
    setBlogs(blogs.concat(b.data));
  }

  async function handleLike(blog) {
    const b = (await likeBlog(blog)).data;
    setBlogs(
      blogs.map((log) => {
        if (log.id === b.id) {
          return b;
        }
        return log;
      })
    );
  }

  async function delHandler(blog) {
    if (!window.confirm("Are you sure you want to delete this blog?")) {
      return;
    }

    await delBlog(blog);
    setBlogs(blogs.filter((b) => b.id !== blog.id));
  }

  function notifWrap(msg, err) {
    setError(err);

    setNotif(msg);

    setTimeout(() => {
      setError(false);
      setNotif(null);
    }, 5000);
  }

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await login({
        username: username,
        password: password,
      });

      setUser(response);
      setUsername("");
      setPassword("");
      window.localStorage.setItem("loggedinUser", JSON.stringify(response));
      setToken(response.token);
      notifWrap("Logged in!", false);
    } catch {
      notifWrap("Bad login! Try a different combo!!", true);
      //ERROR HANDLING HERE
    }
  }

  function handleLogout(e) {
    e.preventDefault();
    setUser(null);

    window.localStorage.removeItem("loggedinUser");
  }

  useEffect(() => {
    blogService.getAll().then((blogs) => setBlogs(blogs));
  }, []);

  if (user === null) {
    return (
      <div>
        <Notification message={notif} error={error} />
        <Login
          submit={handleLogin}
          passVal={password}
          loginVal={username}
          setpassVal={setPassword}
          setloginVal={setUsername}
        />
      </div>
    );
  }

  return (
    <div>
      <Notification message={notif} error={error} />
      <div>
        <h1>{user.name} is logged in.</h1>{" "}
        <button onClick={handleLogout}>Logout</button>
      </div>
      <BlogForm postBlogHandler={postBlogHandler} blogs={blogs} />
      <div>
        <h2>Blogs</h2>
        <ul id="blogsMapped">
          {blogs.map((blog) => (
            <Blog
              key={blog.id}
              blog={blog}
              handleLike={handleLike}
              delHandler={delHandler}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
