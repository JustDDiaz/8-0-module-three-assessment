import { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="Navbar">
        <Link to="/">
          <img
            className="ghibli-logo"
            src="https://m.media-amazon.com/images/I/41AX51uL0dL._AC_SX466_.jpg"
            alt="gibli-logo"
          />
        </Link>
        <Link to="/movies">Movies</Link>
        <Link to="/people">People</Link>
        <Link to="/locations">Locations</Link>
      </nav>
    );
  }
}

export default Navbar;
