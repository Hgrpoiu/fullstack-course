import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { likeBlog } from "../reducers/blogReducer";

function LikeBlogButton({ blog }) {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(likeBlog(blog, blogs));
      }}
    >
      <p>
        Likes: {blog.likes}
        <button type="submit">Like</button>
      </p>
    </form>
  );
}

LikeBlogButton.propTypes = {};

export default LikeBlogButton;
