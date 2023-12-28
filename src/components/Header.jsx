import Nav from "./Nav";

const Header = () => {
  return (
    <div className="header sticky-header">
      <h1 className="title">The big news</h1>
      <Nav />
    </div>
  );
};

export default Header;
