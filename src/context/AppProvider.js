import React, { Component } from "react";
import AppContext from "./AppContext";

export default class AppProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usernameField: React.createRef(),
      passwordField: React.createRef(),
      urlField: React.createRef(),
      descriptionField: React.createRef(),
      titleField: React.createRef(),
      username: null,
      password: null,
      token: localStorage.getItem("token") || null,
      isRegistered: localStorage.getItem("isRegistered") || false,
      handleRegister: e => {
        e.preventDefault();
        fetch("auth/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            registerData: {
              username: this.state.usernameField.current.value,
              password: this.state.passwordField.current.value
            }
          })
        })
          .then(response => response.json())
          .then(data => {
            console.log(data);
            this.setState({
              username: this.state.usernameField.current.value,
              password: this.state.passwordField.current.value,
              isRegistered: true
            });
            localStorage.setItem("isRegistered", "true");
          });
        console.log(this.state.isRegistered);
      },

      handleLogin: e => {
        fetch("auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            loginData: {
              username: this.state.usernameField.current.value,
              password: this.state.passwordField.current.value
            }
          })
        })
          .then(response => response.json())
          .then(data => {
            this.setState({ token: data.data.token });
            localStorage.setItem("token", data.data.token);
          });
      },
      handleAdd: e => {
        e.preventDefault();
        fetch("api/bookmarks", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            token: this.state.token
          },
          body: JSON.stringify({
            url: this.state.urlField.current.value,
            shortDescription: this.state.descriptionField.current.value,
            title: this.state.titleField.current.value
          })
        })
          .then(response => response.json())
          .then(data => console.log(data));
      },
      handleEdit: id => {
        fetch(`api/bookmarks/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            token: this.state.token
          },
          body: JSON.stringify({
            url: this.state.urlField.current.value,
            shortDescription: this.state.descriptionField.current.value,
            title: this.state.titleField.current.value
          })
        })
          .then(response => response.json())
          .then(data => console.log(data));
      }
    };
  }
  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
