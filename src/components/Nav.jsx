import User from "./User";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="sticky-nav">
      <Link to="/topics">
        <button>Topics</button>
      </Link>
      <Link to="/">
        <button className="home-button">Back to Home</button>
      </Link>
      {/* <form>
        <input placeholder="search articles" className="search-input"></input>
        <button className="search-button">go</button>
      </form> */}
      <User />
    </nav>
  );
};

export default Nav;
