import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class List extends Component {
  componentDidMount() {
    this.props.getData();
  }
  render() {
    return (
      <div className="list col-12">
        <div className="button-container col-12">
          {this.props.bookmarks !== undefined &&
            this.props.bookmarks.map((bookmark, index) => (
              <div className="row" key={index}>
                <div className="title col-2">{bookmark.title}</div>
                <div className="url col-4">{bookmark.url}</div>
                <div className="description col-4">
                  {bookmark.shortDescription}
                </div>
                <div className="button-container col-2">
                  <Link to={{ pathname: "/edit", state: { id: bookmark._id, url: bookmark.url, desc: bookmark.shortDescription, title: bookmark.title } }}><i className="fas fa-edit" /></Link>
                  <i className="fas fa-trash-alt" onClick={() => this.props.handleDelete(bookmark._id)} />
                </div>
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
