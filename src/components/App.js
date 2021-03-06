import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import "../styles/App.scss";
import IntroForm from "./IntroForm";
import List from "./List";
import Edidt from "./Edidt";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.usernameField = React.createRef();
    this.passwordField = React.createRef();
    this.urlField = React.createRef();
    this.descriptionField = React.createRef();
    this.titleField = React.createRef();
    this.idField = React.createRef();
    this.state = {
      username: localStorage.getItem("username") || null,
      password: localStorage.getItem("password") || null,
      token: localStorage.getItem("token") || null,
      isRegistered: localStorage.getItem("isRegistered") || false,
      isLogged: localStorage.getItem("isLogged") || false,
      bookmarks: []
    };
  }
  handleRegister = e => {
    e.preventDefault();
    fetch("auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        registerData: {
          username: this.usernameField.current.value,
          password: this.passwordField.current.value
        }
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          username: this.usernameField.current.value,
          password: this.passwordField.current.value,
          isRegistered: true
        });
        localStorage.setItem("isRegistered", "true");
      });
  };
  handleLogin = e => {
    e.preventDefault();
    fetch("auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        loginData: {
          username: this.usernameField.current.value,
          password: this.passwordField.current.value
        }
      })
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ token: data.data.token, isLogged: true });
        localStorage.setItem("token", data.data.token);
        localStorage.setItem("isLogged", "true");
      });
  };
  handleAdd = e => {
    fetch("api/bookmarks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        token: this.state.token
      },
      body: JSON.stringify({
        url: this.urlField.current.value,
        shortDescription: this.descriptionField.current.value,
        title: this.titleField.current.value
      })
    })
      .then(response => response.json())
      .then(data => {
        if (data.error === "jwt malformed" || data.error === "jwt expired") {
          this.setState({ isLogged: false });
          localStorage.setItem("isLogged", "false");
        } else {
          this.getData();
        }
      });
  };
  handleEdit = id => {
    fetch(`api/bookmarks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        token: this.state.token
      },
      body: JSON.stringify({
        url: this.urlField.current.value,
        shortDescription: this.descriptionField.current.value,
        title: this.titleField.current.value
      })
    })
      .then(response => response.json())
      .then(data => {
        if (data.error === "jwt malformed" || data.error === "jwt expired") {
          this.setState({ isLogged: false });
          localStorage.setItem("isLogged", "false");
        } else {
          this.getData();
        }
      });
  };
  getData = () => {
    fetch("api/bookmarks", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: this.state.token
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.error === "jwt malformed" || data.error === "jwt expired") {
          this.setState({ isLogged: false });
          localStorage.setItem("isLogged", "false");
        } else {
          this.setState({ bookmarks: data.data.bookmark });
        }
      });
  };
  handleDelete = id => {
    fetch(`api/bookmarks/${id}`, {
      method: "DELETE",
      headers: {
        token: this.state.token
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data.error === "jwt malformed" || data.error === "jwt expired") {
          this.setState({ isLogged: false });
          localStorage.setItem("isLogged", "false");
        } else {
          this.getData();
        }
      });
  };
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route
            exact
            path="/"
            render={() =>
              this.state.isLogged ? (
                <Redirect to="/bookmarks" />
              ) : (
                <IntroForm
                  isRegistered={this.state.isRegistered}
                  usernameField={this.usernameField}
                  passwordField={this.passwordField}
                  handleRegister={this.handleRegister}
                  handleLogin={this.handleLogin}
                />
              )
            }
          />
          <Route
            path="/bookmarks"
            render={() =>
              this.state.isLogged ? (
                <List
                  bookmarks={this.state.bookmarks}
                  getData={this.getData}
                  handleDelete={this.handleDelete}
                />
              ) : (
                <Redirect to="/" />
              )
            }
          />
          <Route
            path="/add"
            render={() =>
              this.state.isLogged ? (
                <Edidt
                  handleAdd={this.handleAdd}
                  idField={this.idField}
                  urlField={this.urlField}
                  descriptionField={this.descriptionField}
                  titleField={this.titleField}
                />
              ) : (
                <Redirect to="/" />
              )
            }
          />
          <Route
            path="/edit"
            render={({ location }) => (
              <Edidt
                handleEdit={this.handleEdit}
                idField={this.idField}
                urlField={this.urlField}
                descriptionField={this.descriptionField}
                titleField={this.titleField}
                location={location}
              />
            )}
          />
        </BrowserRouter>
      </div>
    );
  }
}
