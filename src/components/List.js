import React, { Component } from 'react'
import AppContext from '../context/AppContext';
import { Link } from 'react-router-dom';

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
    console.log(this.state.bookmarks);
    return (
      <AppContext.Consumer>
        {context => (
          <div className="list">
            {this.state.bookmarks !== undefined && this.state.bookmarks.map((bookmark, index) => (
              <div className="row" key={index}>
                <div className="title">{bookmark.title}</div>
                <div className="url">{bookmark.url}</div>
              </div>
            ))}
            <div className="button-container">
              <Link to="./Edidt"><button className="btn btn-primary">Add item</button></Link>
            </div>
          </div>
        )}
      </AppContext.Consumer>
    )
  }
}
