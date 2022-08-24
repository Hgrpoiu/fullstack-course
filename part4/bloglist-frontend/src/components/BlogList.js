import React from "react";
import PropTypes from "prop-types";
import { deleteBlog, initBlogs, likeBlog } from "../reducers/blogReducer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Blog from "./Blog";

function BlogList(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initBlogs());
  }, [dispatch]);

  const blogs = useSelector((state) => {
    return state.blogs;
  });

  return (
    <div>
      <h2>Blogs</h2>
      <ul id="blogsMapped">
        {blogs.slice()
          .sort((blog1, blog2) => {
            return blog2.likes - blog1.likes;
          })
          .map((blog) => (
            <Blog
              key={blog.id}
              blog={blog}
              handleLike={() => {
                dispatch(likeBlog(blog, blogs));
              }}
              delHandler={() => dispatch(deleteBlog(blog, blogs))}
            />
          ))}
      </ul>
    </div>
  );
}

BlogList.propTypes = {};

export default BlogList;
