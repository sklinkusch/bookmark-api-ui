import React, { Component } from "react";
import AppContext from "../context/AppContext";
import { Link } from "react-router-dom";

export default class IntroForm extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {context => {
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
                    ref={context.usernameField}
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    ref={context.passwordField}
                  />
                </div>

                {context.isRegistered ? (
                  <Link to="./bookmarks">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={context.handleLogin}
                    >
                      Login
                    </button>
                  </Link>
                ) : (
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={context.handleRegister}
                  >
                    Register
                  </button>
                )}
              </form>
            </div>
          );
        }}
      </AppContext.Consumer>
    );
  }
}
