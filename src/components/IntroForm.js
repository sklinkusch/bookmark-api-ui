import React, { Component } from 'react';


export default class IntroForm extends Component {
  render() {
    return (
      <div>
        <form>
  <div class="form-group">
    <label for="exampleInputEmail1">User name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter user name" />
    
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter password" />
  </div>
  
  <button type="submit" class="btn btn-primary">Register</button>
  <button type="submit" class="btn btn-primary">Test</button>
</form>
        
      </div>
    )
  }
}
