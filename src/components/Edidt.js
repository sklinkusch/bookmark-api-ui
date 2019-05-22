import React, { Component } from "react";

export default class Edidt extends Component {
  render() {
    return (
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

          <button type="submit" class="btn btn-primary">
            submit
          </button>
        </form>
      </div>
    );
  }
}
