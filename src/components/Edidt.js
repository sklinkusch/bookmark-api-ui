import React from "react";
import { Link } from "react-router-dom";

export default function Edidt(props) {
  console.log(props)
  const url = "location" in props ? props.location.state.url : "";
  const desc = "location" in props ? props.location.state.desc : "";
  const title = "location" in props ? props.location.state.title : "";
  return (
    <div>
      <form>
        {/* <div className="form-group">
          <label>id</label>
          <input type="text" className="form-control" readOnly /> */}
        {/* </div> */}
        <div className="form-group">
          <label>url</label>
          <input
            type="text"
            className="form-control"
            required
            placeholder="provide your Url"
            ref={props.urlField}
            defaultValue={url}
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            className="form-control"
            placeholder="add something"
            ref={props.descriptionField}
            defaultValue={desc}
          />
        </div>

        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="add Title"
            ref={props.titleField}
            defaultValue={title}
          />
        </div>
        {"location" in props ? (
          <Link to="../bookmarks">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => props.handleEdit(props.location.state.id)}
            >
              Edit bookmark
            </button>
          </Link>
        ) : (
            <Link to="../bookmarks">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={() => props.handleAdd()}
              >
                Add bookmark
            </button>
            </Link>
          )}
      </form>
    </div >
  );
}
