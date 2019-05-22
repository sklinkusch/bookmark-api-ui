import React from "react";
import { Link } from "react-router-dom";

export default function Edidt(props) {
  return (
    <div>
      <form>
        <div className="form-group">
          <label>id</label>
          <input type="text" className="form-control" readOnly />
        </div>
        <div className="form-group">
          <label>url</label>
          <input
            type="text"
            className="form-control"
            required
            placeholder="provide your Url"
            ref={props.urlField}
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            className="form-control"
            placeholder="add something"
            ref={props.descriptionField}
          />
        </div>

        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="add Title"
            ref={props.titleField}
          />
        </div>
        {props.edit ? (
          <Link to="../bookmarks">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={props.handleEdit}
            >
              Edit bookmark
            </button>
          </Link>
        ) : (
          <Link to="../bookmarks">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={props.handleAdd}
            >
              Add bookmark
            </button>
          </Link>
        )}
      </form>
    </div>
  );
}
