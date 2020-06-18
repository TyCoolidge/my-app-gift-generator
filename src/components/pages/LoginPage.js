import React from "react";
import { Link } from "react-router-dom";
import Header from "../ui/Header";

export default function LoginPage() {
  return (
    // Make Title and Logo a component
    <div className="container">
      <div className="row my-5">
        {/* Make col a component */}
        <Header />
        {/* add logo */}
        <div className="col-6 offset-3 mb-3">
          <h5 className="text-center">Let's Find the Perfect Gift!</h5>
        </div>
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <h2
                style={{ color: "red" }}
                className="card-title text-center mb-3"
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
                  <Link to="create-answer" className="btn btn-primary btn">
                    Log in
                  </Link>
                  {/* Link used to stay in React, acts like <a> */}
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* First card */}
        <div className="col-12 col-sm-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
          <div className="card" style={{ backgroundColor: "#D8D8D8" }}>
            <div className="card-body">
              <h2
                style={{ color: "red" }}
                className="card-title text-center mb-3"
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
                  <Link to="create-answer" className="btn btn-primary btn">
                    Log in
                  </Link>
                  {/* Link used to stay in React, acts like <a> */}
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Second card */}
        <div className="mt-4 col-12 col-sm-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
          <div className="card" style={{ backgroundColor: "#D8D8D8" }}>
            <div className="card-body">
              <h2 className="card-title text-center">
                Sign up to add your own gift idea
              </h2>
              <button
                type="button"
                className="btn btn-primary btn-lg btn-block my-3"
              >
                Sign up
              </button>
              {/* <!-- Dragdown menu once click on signup --> */}
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
                <label
                  htmlFor="colFormLabel"
                  className="col-sm-4 col-form-label"
                >
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
                  to="/add-gift-page"
                  className="float-left mt-1 btn btn-primary btn-block"
                >
                  Submit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
