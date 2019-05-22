import React from "react";
import { Link } from "react-router-dom";

export default function Edidt(props) {
  console.log(props.location);
  return (
    <div>
      <form>
        <div className="form-group">
          <label>id</label>
          {props.location.state.edit !== undefined ? (
            <input
              type="text"
              className="form-control"
              ref={props.idField}
              readOnly
              value={props.location.id}
            />
          ) : (
            <input type="text" className="form-control" readOnly />
          )}
        </div>
        <div className="form-group">
          <label>url</label>
          {props.location.edit !== undefined && props.location.edit ? (
            <input
              type="text"
              className="form-control"
              required
              placeholder="provide your Url"
              ref={props.urlField}
              defaultValue={props.location.url}
            />
          ) : (
            <input
              type="text"
              className="form-control"
              required
              placeholder="provide your Url"
              ref={props.urlField}
            />
          )}
        </div>

        <div className="form-group">
          <label>Description</label>
          {props.location.edit !== undefined && props.location.edit ? (
            <input
              type="text"
              className="form-control"
              placeholder="add something"
              ref={props.descriptionField}
              defaultValue={props.location.desc}
            />
          ) : (
            <input
              type="text"
              className="form-control"
              placeholder="add something"
              ref={props.descriptionField}
            />
          )}
        </div>

        <div className="form-group">
          <label>Title</label>
          {props.location.edit !== undefined && props.location.edit ? (
            <input
              type="text"
              className="form-control"
              placeholder="add Title"
              ref={props.titleField}
              defaultValue={props.location.title}
            />
          ) : (
            <input
              type="text"
              className="form-control"
              placeholder="add Title"
              ref={props.titleField}
            />
          )}
        </div>
        {props.location.edit ? (
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
