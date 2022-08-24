import React from "react";
import PropTypes from "prop-types";
import LikeBlogButton from "./LikeBlogButton";
import { useDispatch, useSelector } from "react-redux";
import { useField } from "../hooks/useField";
import services from "../services/blogs";
import { commentOnBlog } from "../reducers/blogReducer";

function ZoomedBlog({ blog }) {
  const [commentForm, resetCommentForm] = useField("text");
  const blogs = useSelector((state) => state.blogs);
  const dispatch=useDispatch()

  return (
    <div className="zoomedblog">
      <h1>{blog.title}</h1>
      <div>
        <a href={blog.url}>{blog.url}</a>
        <LikeBlogButton blog={blog} />
        <p>Added by {blog.author}</p>
        <h3>Comments</h3>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            dispatch(commentOnBlog(blogs, blog.id, commentForm.value))
            resetCommentForm()
          }}
        >
          <p>
            <input {...commentForm} />
            <button type="submit">Comment</button>
          </p>
        </form>
        <ul>
          {blog.comments.map((c) => {
            return <li key={c}>{c}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

ZoomedBlog.propTypes = {};

export default ZoomedBlog;
