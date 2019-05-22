import React, { Component } from "react";
import AppContext from "../context/AppContext";

export default class Edidt extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {context => (
          <div>
            <form>
              <div className="form-group">
                <label>id</label>
                <input
                  type="text"
                  className="form-control"
                  readOnly
                />
              </div>
              <div className="form-group">
                <label>url</label>
                <input
                  type="text"
                  className="form-control"
                  required
                  placeholder="provide your Url"
                  ref={context.urlField}
                />
              </div>

              <div className="form-group">
                <label>Description</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="add something"
                  ref={context.descriptionField}
                />
              </div>

              <div className="form-group">
                <label>Title</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="add Title"
                  ref={context.titleField}
                />
              </div>
              {this.props.edit ? <button type="submit" className="btn btn-primary" onClick={context.handleEdit}>Edit bookmark</button> : <button
                type="submit"
                className="btn btn-primary"
                onClick={context.handleAdd}
              >
                Add bookmark
              </button>}
            </form>
          </div>
        )}
      </AppContext.Consumer>
    );
  }
}
