import React, { useState, useRef } from "react";
import Toggleable from "./Toggleable";
import Post from "./Post";
import { postBlog } from "../services/blogs";

function BlogForm(props) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [url, setUrl] = useState("");
  const blogPostRef = useRef();

  async function postBlogHandler() {
    try {
      await props.postBlogHandler(title, author, url);
      setTitle("");
      setAuthor("");
      setUrl("");
      blogPostRef.current.toggleVisability();
    } catch (err) {
      console.log(err.message);
      props.notifWrap("Something went wrong with the blog!", true);
    }
  }

  return (
    <div>
      <h2>Create a blog</h2>
      <Toggleable id="hidderblogform" buttonMsg="Create a blog" ref={blogPostRef} hideMsg="Cancel">
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
