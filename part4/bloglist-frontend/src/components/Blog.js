import "../index.css";
import Toggleable from "./Toggleable";

const Blog = (props) => {
  return (
    <>
      <li id={(props.blog.title).replaceAll(" ","-")} className="blog">
        <Toggleable
          msg={props.blog.title + " by " + props.blog.author}
          buttonMsg="View"
          hideMsg="Hide"
        >
          <a href={props.blog.url}>{props.blog.title}</a>
          <div>
            <p>
              likes:{props.blog.likes}{" "}
              <button
                id={`like-button-${props.blog.title.replaceAll(' ','-')}`}
                onClick={async (e) => {
                  e.preventDefault();
                  await props.handleLike(props.blog);
                }}
              >
                Like
              </button>
            </p>
          </div>
          <div>{props.blog.author}</div>
          <button
            id="blogDelBut"
            onClick={async (e) => {
              e.preventDefault();
              await props.delHandler(props.blog);
            }}
          >
            Delete
          </button>
        </Toggleable>
      </li>
    </>
  );
};

export default Blog;
