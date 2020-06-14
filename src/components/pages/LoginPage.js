import React from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    // Make Title and Logo a component
    <div className="row mt-5">
      <div className="col-6 offset-3 mb-3">
        <h1 className="text-center ">Gift Generator</h1>
      </div>
      {/* add logo */}
      <div className="col-6 offset-3 mb-3">
        <h5 className="text-center ">Let's Find the Perfect Gift!</h5>
      </div>
      {/* First card */}
      <div className="col-6 offset-3">
        <div className="card">
          <div className="card-body">
            <h2
              style={{ color: "red", fontSize: " 25px" }}
              className="card-title text-center mb-5"
            >
              Must be logged in to share gift idea
            </h2>
            <form className="needs-validation">
              {/* make email and password next to form */}
              <div class="form-group row">
                <label for="colFormLabel" class="col-sm-4 col-form-label">
                  Email address:
                </label>
                <div class="col-sm-8">
                  <input
                    type="email"
                    class="form-control"
                    id="colFormLabel"
                    placeholder="col-form-label"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label for="colFormLabel" class="col-sm-4 col-form-label">
                  Password:
                </label>
                <div class="col-sm-8">
                  <input
                    type="password"
                    class="form-control"
                    id="colFormLabel"
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
                  id="logIn"
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
        <div className="card">
          <div className="card-body">
            {/* <h2 className="card-title">Nice to meet you</h2>
            <p style={{ fontSize: "13px" }} className="mb-1">
              Sign up for White Bear. Free forever.
            </p>
            <p
              style={{ color: " blue", fontSize: "13px" }}
              className="mb-5"
              id="signUpText"
            >
              Let's get you signed up.
            </p> */}

            <button
              type="button"
              className="btn btn-success btn-lg btn-block my-5"
              id="signup"
            >
              Sign up
            </button>
            {/* <!-- Dragdown menu once click on signup --> */}
            <div class="form-group row">
              <label for="colFormLabel" class="col-sm-4 col-form-label">
                Email address:
              </label>
              <div class="col-sm-8">
                <input
                  type="email"
                  class="form-control"
                  id="colFormLabel"
                  placeholder="col-form-label"
                />
              </div>
            </div>
            <div class="form-group row">
              <label for="colFormLabel" class="col-sm-4 col-form-label">
                Create Password:
              </label>
              <div class="col-sm-8">
                <input
                  type="password"
                  class="form-control"
                  id="colFormLabel"
                  placeholder="col-form-label"
                />
              </div>
            </div>
            <div class="form-group row">
              <label for="colFormLabel" class="col-sm-4 col-form-label">
                Repeat Password:
              </label>
              <div class="col-sm-8">
                <input
                  type="password"
                  class="form-control"
                  id="colFormLabel"
                  placeholder="col-form-label"
                />
              </div>
            </div>
            <div className="float-right">
              <Link
                to="/add-gift-name"
                type="button"
                className="float-left mt-1 btn-lg btn-success btn-block"
                id="letsGo"
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
