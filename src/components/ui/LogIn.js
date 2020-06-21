import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="col-4 mx-4">
      <h2 style={{ color: "red" }} className="card-title">
        Log In
      </h2>
      <small className="form-text text-muted mb-3">
        Are you a returning user?
      </small>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email or User Name</label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
          />
        </div>
        {/* <!-- disable log in if email/ password fields are not accepted --> */}
        <div className="mt-3 float-right">
          <Link to="/add-gift-page" className="btn btn-primary">
            Log in
          </Link>
          {/* Link used to stay in React, acts like <a> */}
        </div>
      </form>
    </div>
  );
}
