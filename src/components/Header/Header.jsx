function Header() {
  return (
    <div className="container-header">
      <nav className="nav-bar">
        <div className="logo">DE</div>
        <ul className="container-list">
          <li className="list">
            <a href="/" className="nav-bar-link">
              Home
            </a>
          </li>
          <li className="list">
            <a href="/" className="nav-bar-link">
              Contact
            </a>
          </li>
        </ul>
        <button className="nav-bar-burger">
          <span className="burger-bar"></span>
        </button>
      </nav>

      <h1 className="tilte">Dinoto-Encyclopédie</h1>
    </div>
  );
}

export default Header;
