import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class List extends Component {
  componentDidMount() {
    this.props.getData();
  }
  render() {
    return (
      <div className="list">
        <div className="button-container">
          {this.props.bookmarks !== undefined &&
            this.props.bookmarks.map((bookmark, index) => (
              <div className="row" key={index}>
                <div className="title">{bookmark.title}</div>
                <div className="url">{bookmark.url}</div>
              </div>
            ))}
          <div className="button-container">
            <Link to="/add">
              <button className="btn btn-primary">Add item</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
