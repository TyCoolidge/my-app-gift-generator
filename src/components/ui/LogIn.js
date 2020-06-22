import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";

export default class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logInEmailError: "",
      isLogEnabled: false,
      isLogDisabled: true,
    };
  }

  changeLogInFromDisabledToEnable() {}

  validateLoginInputs() {
    const logInEmailInput = document.getElementById("log-in-email-input").value;
    // eslint-disable-next-line
    const logInEmailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const lowerCaseLogInEmailInput = logInEmailInput.toLowerCase();
    // const createPasswordInput = document.getElementById("create-password-input")
    //   .value;
    // const repeatPassword = document.getElementById("repeat-password")
    //   .value;
    if (logInEmailInput === "")
      this.setState({
        logInEmailError: "Please enter your address",
      });
    else if (!logInEmailRegex.test(lowerCaseLogInEmailInput)) {
      this.setState({ logInEmailError: "Please enter a valid email" });
    } else {
      this.setState({
        logInEmailError: "",
        // TODO if email error and password wrror are blank, enable buttons
        isLogDisabled: false,
        isLogEnabled: true,
      });
    }
  }

  render() {
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
            <label htmlFor="log-in-email-input">Email or User Name</label>
            <input
              type="email"
              className={classnames({
                "form-control": true,
                "is-invalid": this.state.logInEmailError !== "",
              })}
              aria-describedby="emailHelp"
              placeholder="Enter email"
              id="log-in-email-input"
            />
            {this.state.logInEmailError !== "" && (
              <small className="form-text text-danger" classname>
                {this.state.logInEmailError}
              </small>
            )}
            {this.state.logInEmailError === "" && (
              <small className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            )}
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
          {this.state.isLogEnabled && (
            <div className="mt-3 float-right">
              <Link
                to="/add-gift-page"
                className="btn btn-primary"
                onClick={() => {
                  this.validateLoginInputs();
                }}
              >
                Log in
              </Link>
              {/* Link used to stay in React, acts like <a> */}
            </div>
          )}
          {/* disabled button that appears on right away, will go away if email parameters are good */}
          {this.state.isLogDisabled && (
            <div className="mt-3 float-right">
              <Link
                to="#"
                className="btn btn-primary"
                onClick={() => {
                  this.validateLoginInputs();
                }}
              >
                Log in
              </Link>
            </div>
          )}
        </form>
      </div>
    );
  }
}
