import React from "react";
import { Link } from "react-router-dom";

export default function IntroForm(props) {
  return (
    <div>
      <form>
        <div className="form-group">
          <label>User name</label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter user name"
            ref={props.usernameField}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            ref={props.passwordField}
          />
        </div>

        {props.isRegistered ? (

          <button
            type="submit"
            className="btn btn-primary"
            onClick={props.handleLogin}
          >
            Login
            </button>

        ) : (
            <Link to="/">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={props.handleRegister}
              >
                Register
            </button>
            </Link>
          )}
      </form>
    </div>
  );
}
