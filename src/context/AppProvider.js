import React, { Component } from 'react'
import AppContext from './AppContext';

export default class AppProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: null,
      password: null,
      token: null
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
