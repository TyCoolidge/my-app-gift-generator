import React from "react";

export default function HomePage() {
  return (
    // <!-- Example single danger button -->
    <div className="btn-group">
      <button
        type="button"
        className="btn btn-danger dropdown-toggle"
        data-toggle="dropdown"
        aria-haspopup="true"
      >
        Gender
      </button>
      <div className="dropdown-menu">
        <button className="dropdown-item" href="#">
          Action
        </button>
        <button className="dropdown-item" href="#">
          Another action
        </button>
        <button className="dropdown-item" href="#">
          Something else here
        </button>
        <div className="dropdown-divider"></div>
        <button className="dropdown-item" href="#">
          Separated link
        </button>
      </div>
    </div>
  );
}
