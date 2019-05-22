import React, { Component } from 'react';
import AppContext from '../context/AppContext'
import { isContext } from 'vm';


export default class IntroForm extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {context => (
          <div>
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1">User name</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter user name" ref={context.usernameField} />

              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter password" ref={context.passwordField} />
              </div>

              {context.isRegistered ? <button type="submit" class="btn btn-primary" onClick={context.handleLogin}>Login</button> : <button type="submit" class="btn btn-primary" onClick={context.handleRegister}>Register</button>}


            </form>

          </div>
        )}
      </AppContext.Consumer>
    )
  }
}
