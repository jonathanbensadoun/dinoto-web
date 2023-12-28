import { useState } from 'react';

function Header() {
  const [showLinks, setShowLinks] = useState(false);
  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };
  return (
    <div className="container-header">
      <nav className={`nav-bar ${showLinks ? 'show-nav' : 'hide-nav'}`}>
        <div className="logo">Dinoto-E</div>
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
          <li className="list">
            <a href="http://dinotoapi.com/doc" className="nav-bar-link">
              DinotoApi.com
            </a>
          </li>
        </ul>
        <button className="nav-bar-burger" onClick={handleShowLinks}>
          <span className="burger-bar"></span>
        </button>
      </nav>

      <h1 className="tilte">Dinoto-Encyclopédie</h1>
    </div>
  );
}

export default Header;
