import React, { Component } from 'react'
import AppContext from '../context/AppContext';

export default class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bookmarks: []
    }
  }
  getData = () => {
    fetch('api/bookmarks', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'token': this.state.token
      }
    }).then(response => response.json()).then(data => {
      this.setState({ bookmarks: data.data.bookmark })
    });
  }
  componentDidMount() {
    this.getData();
  }
  render() {
    return (
      <AppContext.Consumer>
        {context => (
          <div className="list">
            {this.state.bookmarks.map((bookmark, index) => (
              <div className="row" key={index}>
                <div className="title">{bookmark.title}</div>
                <div className="url">{bookmark.url}</div>
              </div>
            ))}
          </div>
        )}
      </AppContext.Consumer>
    )
  }
}
