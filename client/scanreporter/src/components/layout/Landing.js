import React from "react";
import { Link } from "react-router-dom";
function Landing() {
  return (
    <div style={{ height: "75vh" }} className="container valign-wrapper">
      <div className="row center-align">
        <a href="#!">Landing page</a>
        <div className="col s12 center-align">
          <h4>
            <b>Build</b> a login app with auth{" "}
            <span style={{ fontFamily: "monospace" }}> MERN stack </span>
            from scratch
          </h4>
          <p className="flow-text grey-text text-darken-1">
            Basic Boilerplate app with JWT and passports
          </p>
          <br />
          <div className="col s6">
            <Link
              to="/Register"
              style={{
                width: "140px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
              }}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Register
            </Link>
          </div>
          <div className="col s6">
            <Link
              to="/Login"
              style={{
                width: "140px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
              }}
              className="btn btn-large waves-light waves-effect white black-text"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
