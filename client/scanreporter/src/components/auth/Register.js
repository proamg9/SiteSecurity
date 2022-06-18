import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";

function Register({ registerUsers, history }) {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    user_name: "",
    user_pass: "",
    email: "",
  });
  const { first_name, last_name, user_name, user_pass, email } = user;
  //console.log(props);
  function onChange(e) {
    console.log("value changed");
    console.log(JSON.stringify(history));
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit pressed");
    registerUsers(user, history);
  };

  useEffect(() => {});

  return (
    <div className="container">
      <div className="row">
        <div className="col s8 offset-s2">
          <Link to="/" className="button-flat waves-effect">
            <i
              className="material-icons"
              style={{ marginTop: "10px", marginLeft: "10px" }}
            >
              keyboard_backspace
            </i>
            <span className="flow-text" style={{ marginLeft: "10px" }}>
              Back to home
            </span>
          </Link>
          <div
            style={{ font: "monospace", paddingLeft: "1px" }}
            className="col s12"
          >
            <h4>
              <b>Register here</b>
            </h4>
          </div>
          <p className="grey-text text-darken-1">
            {" "}
            Already have a login, <Link to="/login">click here</Link>
          </p>
          <form noValidate onSubmit={handleSubmit}>
            <div
              className="input-field col s12"
              style={{ marginLeft: "-11px" }}
            >
              <input
                onChange={onChange}
                name="first_name"
                value={first_name}
              ></input>
              <label class="active" htmlFor="first_name">
                {" "}
                First Name
              </label>
            </div>
            <div
              className="input-field col s12"
              style={{ marginLeft: "-11px" }}
            >
              <input
                onChange={onChange}
                name="last_name"
                value={last_name}
              ></input>
              <label class="active" htmlFor="lastName">
                {" "}
                Last Name
              </label>
            </div>
            <div
              className="input-field col s12"
              style={{ marginLeft: "-11px" }}
            >
              <input
                onChange={onChange}
                name="user_name"
                value={user_name}
              ></input>
              <label class="active" htmlFor="userName">
                {" "}
                user Name
              </label>
            </div>
            <div
              className="input-field col s12"
              style={{ marginLeft: "-11px" }}
            >
              <input
                onChange={onChange}
                name="user_pass"
                value={user_pass}
              ></input>
              <label class="active" htmlFor="userPass">
                {" "}
                Password
              </label>
            </div>
            <div
              className="input-field col s12"
              style={{ marginLeft: "-11px" }}
            >
              <input onChange={onChange} name="email" value={email}></input>
              <label class="active" htmlFor="email">
                {" "}
                Email
              </label>
            </div>
            <div className="col s12" style={{ marginLeft: "-11.5px" }}>
              <button
                style={{
                  borderRadius: "3px",
                  letterSpacing: "0.5px",
                  marginTop: "3rem",
                }}
                type="submit"
                onSubmit={handleSubmit}
                name="action"
                className="btn waves-effect waves-light hoverable blue accent-3"
              >
                <i class="material-icons right">send</i>
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  registerUsers: (user) => {
    dispatch(registerUser(user));
  },
});
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Register));
