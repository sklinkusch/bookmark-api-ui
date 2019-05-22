import React, { Component } from 'react'
import AppContext from './AppContext';

export default class AppProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      usernameField: React.createRef(),
      passwordField: React.createRef(),
      username: null,
      password: null,
      token: localStorage.getItem('token') || null,
      isRegistered: localStorage.getItem('isRegistered') || false,
      handleRegister: () => {
        fetch('auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            "registerData": {
              "username": this.usernameField.current.value,
              "password": this.passwordField.current.value
            }
          })
        }).then(response => response.json()).then(data => {
          this.setState({ username: this.usernameField.current.value, password: this.passwordField.current.value, isRegistered: true });
          localStorage.setItem('isRegistered', 'true');
        })
      },

      handleLogin: () => {
        fetch('auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            "loginData": {
              "username": this.usernameField.current.value,
              "password": this.passwordField.current.value
            }
          })
        }).then(response => response.json()).then(data => {
          this.setState({ token: data.data.token });
          localStorage.setItem('token', data.data.token);
        })
      }



    }
  }
  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}
