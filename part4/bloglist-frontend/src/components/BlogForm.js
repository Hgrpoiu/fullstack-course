import React, { useState, useRef } from "react";
import Toggleable from "./Toggleable";
import Post from "./Post";
import { useDispatch, useSelector } from "react-redux";
import { setNotif } from "../reducers/msgReducer";
import { postBlog } from "../reducers/blogReducer";

function BlogForm(props) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [url, setUrl] = useState("");
  const blogPostRef = useRef();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  async function post(title, author, url) {
    dispatch(setNotif(`${title} by ${author} was posted!`, 5));
    dispatch(
      postBlog(
        {
          title: title,
          author: author,
          url: url,
        },
        user.token
      )
    );
  }

  async function postBlogHandler() {
    try {
      await post(title, author, url);
      setTitle("");
      setAuthor("");
      setUrl("");
      blogPostRef.current.toggleVisability();
    } catch (err) {
      console.log(err.message);
      dispatch(setNotif("Something went wrong with the blog!", 5));
    }
  }

  return (
    <div className="card">
      <h2>Create a blog</h2>
      <Toggleable
        id="hidderblogform"
        buttonMsg="Create a blog"
        ref={blogPostRef}
        hideMsg="Cancel"
      >
        <Post
          title={title}
          url={url}
          author={author}
          titleChange={setTitle}
          urlChange={setUrl}
          authorChange={setAuthor}
          createHandler={postBlogHandler}
        />
      </Toggleable>
    </div>
  );
}

BlogForm.propTypes = {};

export default BlogForm;
