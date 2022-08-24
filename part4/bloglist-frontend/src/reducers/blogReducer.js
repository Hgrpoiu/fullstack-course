import { createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";
import { useSelector } from "react-redux";
import services from "../services/blogs";

const initialState = [];

const blogReducer = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    setBlogs(state, action) {
      return (state = action.payload);
    },
    addBlog(state, action) {
      return state.concat(action.payload);
    },
    removeBlog(state, action) {
      return state.filter((b) => {
        return b.id !== blog.id;
      });
    },
  },
});

export function initBlogs() {
  return async (dispatch) => {
    try {
      dispatch(setBlogs(await services.getAll()));
    } catch (err) {
      console.log(err);
    }
  };
}

export function likeBlog(blog, blogs) {
  return async (dispatch) => {
    const b = (await services.likeBlog(blog)).data;
    dispatch(
      setBlogs(
        blogs.map((log) => {
          if (log.id === b.id) {
            return b;
          }
          return log;
        })
      )
    );
  };
}

export function deleteBlog(blog, blogs) {
  return async (dispatch) => {
    await services.delBlog(blog);
    dispatch(setBlogs(blogs.filter((b) => b.id !== blog.id)));
  };
}

export function postBlog(blog, token) {
  return async (dispatch) => {
    const b = (await services.postBlog(blog, token)).data;
    dispatch(addBlog(b));
  };
}

export function commentOnBlog(blogs, id, comment) {
  return async (dispatch) => {
    const updatedBlog = (await services.addComment(id, comment)).data;
    //udpated blog validated

    const updatedBlogArr = blogs.map((blog) => {
      if (blog.id === id) {
        return updatedBlog;
      }
      return blog;
    });
    dispatch(setBlogs(updatedBlogArr));
  };
}

export const { setBlogs, addBlog, removeBlog } = blogReducer.actions;
export default blogReducer.reducer;
