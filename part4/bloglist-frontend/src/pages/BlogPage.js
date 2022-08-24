import React from "react";
import PropTypes from "prop-types";
import Notification from "../components/Notification";
import LoggedInBar from "../components/LoggedInBar";
import BlogForm from "../components/BlogForm";
import BlogList from "../components/BlogList";

function BlogPage(props) {
  return (
    <div>
      <Notification />
      <BlogForm />
      <BlogList />
    </div>
  );
}

BlogPage.propTypes = {};

export default BlogPage;
