const Nav = () => {
  return (
    <nav>
      <button>topics</button>
      <form>
        <input placeholder="search articles" className="search-input"></input>
        <button className="search-button">go</button>
      </form>
    </nav>
  );
};

export default Nav;
