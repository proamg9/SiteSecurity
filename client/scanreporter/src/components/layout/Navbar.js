import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div class="navbar-fixed">
      <nav class="z-depth-0">
        <div class="nav-wrapper white">
          <Link
            to="/"
            style={{ font: "monospace", top: "-40px" }}
            className="col s5 brand-logo center black-text"
          >
            <p href="#!">Logo</p>
          </Link>
          <ul className="right hide-on-med-and-down">
            <li>
              <a href="sass.html">Sass</a>
            </li>
            <li>
              <a href="badges.html">Components</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
