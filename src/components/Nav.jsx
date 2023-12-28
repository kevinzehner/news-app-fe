import User from "./User";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div className="main-btns">
        <Link to="/topics">
          <button className="topic-btn">Topics</button>
        </Link>
        <Link to="/">
          <button className="topic-btn">Back to Home</button>
        </Link>
      </div>
      <User />
    </nav>
  );
};

export default Nav;
