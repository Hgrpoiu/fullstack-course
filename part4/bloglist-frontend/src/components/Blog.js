import { Link } from "react-router-dom";
import "../index.css";
import Toggleable from "./Toggleable";

const Blog = ({blog}) => {
  return (
    <>
      <li id={blog.title.replaceAll(" ", "-")} className="blog">
        <Link className="Link" to={`/blogs/${blog.id}`}>{blog.title} by {blog.author}</Link>
      </li>
    </>
  );
};

export default Blog;
