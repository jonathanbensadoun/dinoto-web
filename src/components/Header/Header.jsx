import { useState } from 'react';

function Header() {
  const [showLinks, setShowLinks] = useState(false);
  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };
  return (
    <div className="container-header" id="home">
      <nav className={`nav-bar ${showLinks ? 'show-nav' : 'hide-nav'}`}>
        <div className="logo">Dinoto-E</div>
        <ul className="container-list">
          <li className="list">
            <a href="#home" className="nav-bar-link">
              Home
            </a>
          </li>
          <li className="list">
            <a
              href="mailto:jonathan.ben-sadoun@oclock.school"
              className="nav-bar-link"
            >
              Contact
            </a>
          </li>
          <li className="list">
            <a href="http://dinotoapi.com/doc" className="nav-bar-link">
              DinotoApi.com
            </a>
          </li>
        </ul>
        <button
          type="button"
          className="nav-bar-burger"
          onClick={handleShowLinks}
          aria-label="Toggle menu"
        >
          <span className="burger-bar" />
        </button>
      </nav>

      <h1 className="tilte">Dinoto-Encyclopédie</h1>
    </div>
  );
}

export default Header;
