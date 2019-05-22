import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
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
    this.state = {
      username: localStorage.getItem("username") || null,
      password: localStorage.getItem("password") || null,
      token: localStorage.getItem("token") || null,
      isRegistered: localStorage.getItem("isRegistered") || false,
      bookmarks: []
    };
  }
  handleRegister = e => {
    e.preventDefault();
    console.log("entering handleRegister");
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
        console.log("entering localstorage part");
        localStorage.setItem("isRegistered", "true");
        localStorage.setItem("username", this.usernameField.current.value);
        localStorage.setItem("password", this.passwordField.current.value);
      });
    console.log(this.state.isRegistered);
  };
  handleLogin = e => {
    const username =
      this.usernameField.current !== null
        ? this.usernameField.current.value
        : this.state.username;
    const password =
      this.passwordField.current !== null
        ? this.passwordField.current.value
        : this.state.password;
    console.log(`${username}, ${password}`);
    fetch("auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        loginData: {
          username: username,
          password: password
        }
      })
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ token: data.data.token });
        localStorage.setItem("token", data.data.token);
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
      .then(data => console.log(data));
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
      .then(data => console.log(data));
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
        this.setState({ bookmarks: data.data.bookmark });
      });
  };
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route
            exact
            path="/"
            render={() => (
              <IntroForm
                isRegistered={this.state.isRegistered}
                usernameField={this.usernameField}
                passwordField={this.passwordField}
                handleRegister={this.handleRegister}
                handleLogin={this.handleLogin}
              />
            )}
          />
          <Route
            path="/bookmarks"
            render={() => (
              <List
                bookmarks={this.state.bookmarks}
                getData={this.getData}
                handleLogin={this.handleLogin}
              />
            )}
          />
          <Route path="/add" component={Edidt} />
        </BrowserRouter>
      </div>
    );
  }
}
