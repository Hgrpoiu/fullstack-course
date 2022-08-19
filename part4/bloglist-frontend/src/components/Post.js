import React from "react";

function Post(props) {
  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await props.createHandler();
        }}
      >
        <div>
          title:{" "}
          <input
            id="blogTitle"
            value={props.title}
            placeholder="Write title here"
            onChange={(e) => {
              props.titleChange(e.target.value);
            }}
          />
        </div>
        <div>
          author:{" "}
          <input
            id="blogAuthor"
            value={props.author}
            placeholder="Write author here"
            onChange={(e) => {
              props.authorChange(e.target.value);
            }}
          />
        </div>
        <div>
          url:{" "}
          <input
            id="blogUrl"
            value={props.url}
            placeholder="Write url here"
            onChange={(e) => {
              props.urlChange(e.target.value);
            }}
          />
        </div>
        <button id="blogSubmit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

Post.propTypes = {};

export default Post;
