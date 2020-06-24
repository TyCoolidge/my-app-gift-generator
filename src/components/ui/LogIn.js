import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import hash from "object-hash";
import { v4 as getUuid } from "uuid";
import { withRouter } from "react-router-dom";

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logInEmailError: "",
      hasLogInEmailError: false,
      hasLogInEmailSuccess: false,
      //
      logInPasswordError: "",
      hasPasswordError: false,
      hasPasswordSuccess: false,
    };
  }

  async setLogInEmailState(logInEmailInput) {
    // eslint-disable-next-line
    const logInEmailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const lowerCaseLogInEmailInput = logInEmailInput.toLowerCase();
    if (logInEmailInput === "")
      this.setState({
        logInEmailError: "Please enter your address or username",
        hasLogInEmailError: true,
      });
    else if (!logInEmailRegex.test(lowerCaseLogInEmailInput)) {
      this.setState({
        logInEmailError: "Please enter a valid email",
        hasLogInEmailError: true,
      });
    } else {
      this.setState({
        logInEmailError: "",
        hasLogInEmailError: false,
        hasLogInEmailSuccess: true,
      });
    }
  }

  async setLogInPasswordState(logInPasswordInput) {
    if (logInPasswordInput === "") {
      this.setState({
        logInPasswordError: "Please enter your password",
        hasPasswordError: true,
      });
    }
    // TODO: if password does not match database "password entered may be incorrect"
    else {
      this.setState({
        logInPasswordError: "",
        hasPasswordError: false,
        hasPasswordSuccess: true,
      });
    }
  }

  async validateLoginInputs() {
    const logInEmailInput = document.getElementById("login-email-input").value;
    const logInPasswordInput = document.getElementById("login-password-input")
      .value;
    await this.setLogInEmailState(logInEmailInput);
    await this.setLogInPasswordState(logInPasswordInput);
    if (
      this.state.hasLogInEmailError === false &&
      this.state.hasPasswordError === false
    ) {
      const logUser = {
        id: getUuid(),
        email: logInEmailInput,
        password: hash(logInPasswordInput),
        createdAt: Date.now(),
      };
      console.log(logUser);
      this.props.history.push("/add-gift-page");
    }
  }

  render() {
    return (
      <div className="col-xl-4 col-lg-4 mx-4 col-md-12">
        <h2 style={{ color: "red" }} className="card-title">
          Log In
        </h2>
        <small className="form-text text-muted mb-3">
          Are you a returning user?
        </small>
        <form>
          <div className="form-group">
            <label htmlFor="log-in-email-input">Email or User Name</label>
            {/* might not have username for MVP */}
            <input
              type="email"
              className={classnames({
                "form-control": true,
                "is-invalid": this.state.hasLogInEmailError,
                "is-valid": this.state.hasLogInEmailSuccess,
              })}
              aria-describedby="emailHelp"
              placeholder="Enter email or username"
              id="login-email-input"
            />
            {this.state.hasLogInEmailError !== "" && (
              <small className="form-text text-danger">
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
              className={classnames({
                "form-control": true,
                "is-invalid": this.state.hasPasswordError,
                "is-valid": this.state.hasPasswordSuccess,
              })}
              placeholder="Password"
              id="login-password-input"
            />
            {this.state.hasPasswordError && (
              <small className="form-text text-danger">
                {this.state.logInPasswordError}
              </small>
            )}
          </div>
          {/* disabled button that appears right away, will go away if email parameters are good */}

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
        </form>
      </div>
    );
  }
}

export default withRouter(LogIn);
