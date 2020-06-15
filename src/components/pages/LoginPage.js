import React from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    // Make Title and Logo a component
    <div className="row mt-5">
      <div className="col-6 offset-3 mb-3">
        <Link to="/">
          <h1 className="text-center ">Gift Generator</h1>
        </Link>
      </div>
      {/* add logo */}
      <div className="col-6 offset-3 mb-3">
        <h5 className="text-center ">Let's Find the Perfect Gift!</h5>
      </div>
      {/* First card */}
      <div className="col-6 offset-3">
        <div className="card" style={{ backgroundColor: "#D8D8D8" }}>
          <div className="card-body">
            <h2
              style={{ color: "red", fontSize: " 25px" }}
              className="card-title text-center mb-5"
            >
              Must be logged in to share gift idea
            </h2>
            <form className="needs-validation">
              {/* make email and password next to form */}
              <div className="form-group row">
                <label
                  htmlFor="colFormLabel"
                  className="col-sm-4 col-form-label"
                >
                  Email address:
                </label>
                <div className="col-sm-8">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="col-form-label"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label
                  htmlFor="colFormLabel"
                  className="col-sm-4 col-form-label"
                >
                  Password:
                </label>
                <div className="col-sm-8">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="col-form-label"
                  />
                </div>
              </div>
              {/* <!-- disable log in if email/ password fields are not accepted --> */}
              <div className="float-right">
                <Link
                  to="create-answer"
                  type="submit"
                  className="btn btn-success btn"
                >
                  Log in
                </Link>
                {/* Link used to stay in React, acts like <a> */}
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Second gift */}
      <div className="mt-4 col-6 offset-3">
        <div className="card" style={{ backgroundColor: "#D8D8D8" }}>
          <div className="card-body">
            <button
              type="button"
              className="btn btn-success btn-lg btn-block my-5"
            >
              Sign up
            </button>
            {/* <!-- Dragdown menu once click on signup --> */}
            <div className="form-group row">
              <label htmlFor="colFormLabel" className="col-sm-4 col-form-label">
                Email address:
              </label>
              <div className="col-sm-8">
                <input
                  type="email"
                  className="form-control"
                  placeholder="col-form-label"
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="colFormLabel" className="col-sm-4 col-form-label">
                Create Password:
              </label>
              <div className="col-sm-8">
                <input
                  type="password"
                  className="form-control"
                  placeholder="col-form-label"
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="colFormLabel" className="col-sm-4 col-form-label">
                Repeat Password:
              </label>
              <div className="col-sm-8">
                <input
                  type="password"
                  className="form-control"
                  placeholder="col-form-label"
                />
              </div>
            </div>
            <div className="float-right">
              <Link
                to="/add-gift-name"
                type="button"
                className="float-left mt-1 btn-lg btn-success btn-block"
              >
                Submit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
