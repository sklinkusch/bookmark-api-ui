import React, { Component } from "react";
import AppContext from "../context/AppContext";

export default class Edidt extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <AppContext.Consumer>
        {context => (
          <div>
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1">id</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  readOnly
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">url</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                  required
                  placeholder="provide your Url"
                />
              </div>

              <div class="form-group">
                <label for="exampleInputEmail1">Description</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="add something"
                />
              </div>

              <div class="form-group">
                <label for="exampleInputEmail1">Title</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="add Title"
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
