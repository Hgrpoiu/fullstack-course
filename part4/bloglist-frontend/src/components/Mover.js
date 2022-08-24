import { Link } from "react-router-dom";
import LoggedInBar from "./LoggedInBar";

function Mover(props) {
  return (
    <div>
      <header className="Mover">
        <h2>{props.title}</h2>
          <Link to="/blogs">Blogs</Link>
          <Link to="/users">Users</Link>
          <LoggedInBar />
      </header>
      {props.children}
    </div>
  );
}

export default Mover;
