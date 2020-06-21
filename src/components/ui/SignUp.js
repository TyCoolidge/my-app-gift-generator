import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    console.log("HEy console");
    this.state = {
      isEmailInputDisplayed: false,
      makeBtnLargeAndCentered: true,
      signUpEmailError: "",
      //   addusername logic
      createPasswordError: "",
      repeatPasswordError: "",
    };
  }

  showCreateAccountInputs() {
    console.log("show");
    this.setState({ isEmailInputDisplayed: !this.state.isEmailInputDisplayed });
  }
  changeButtonFromLargeToRegular() {
    //   https://stackoverflow.com/a/53896461
    //  current state is lg button that when onClick changes to regular size Button
    this.setState({
      makeBtnLargeAndCentered: !this.state.makeBtnLargeAndCentered,
    });
  }

  validateUserInputs() {
    const signUpEmailInput = document.getElementById("sign-up-email-input")
      .value;
    // eslint-disable-next-line
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const lowerCaseSignUpEmailInput = signUpEmailInput.toLowerCase();
    // const createPasswordInput = document.getElementById("create-password-input")
    //   .value;
    // const repeatPassword = document.getElementById("repeat-password")
    //   .value;
    if (signUpEmailInput === "")
      this.setState({ signUpEmailError: "Please enter your address" });
    else if (!emailRegex.test(lowerCaseSignUpEmailInput)) {
      this.setState({ signUpEmailError: "Please enter a valid email" });
    } else {
      this.setState({ signUpEmailError: "" });
    }
  }

  render() {
    return (
      <div className="col mx-4">
        <h2 style={{ color: "red" }} className="card-title">
          Sign Up to Create a Gift
        </h2>
        <small className="form-text text-muted mb-3">
          Are you a new user? Sign up below!
        </small>
        {this.state.isEmailInputDisplayed && (
          <form>
            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <label htmlFor="sign-up-email-input">Email address</label>
                  <input
                    type="email"
                    className={classnames({
                      "form-control": true,
                      "is-invalid": this.state.signUpEmailError !== "",
                    })}
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    id="sign-up-email-input"
                  />
                  {this.state.signUpEmailError !== "" && (
                    <small className="form-text text-danger" classname>
                      {this.state.signUpEmailError}
                    </small>
                  )}
                  {this.state.signUpEmailError === "" && (
                    <small className="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                  )}
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">User Name</label>
                  <input type="userName" className="form-control" />
                </div>
              </div>

              {/* <div className="mt-4">
                              <Link
                                to="create-answer"
                                className="btn btn-lg btn-block btn-primary"
                              >
                                Create Account
                              </Link>
                              {/* Link used to stay in React, acts like <a> */}
              {/* </div> */}
            </div>
            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <label htmlFor="create-password-input">Create Password</label>
                  <input
                    type="email"
                    className="form-control"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    id="create-password-input"
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label htmlFor="repeat-password">Repeat Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    id="repeat-password"
                  />
                </div>
              </div>
            </div>
            <div className="text-center mt-3">
              <Link
                to="#"
                className="btn btn-primary"
                onClick={() => {
                  this.validateUserInputs();
                }}
              >
                Create Account
              </Link>
              {/* Link used to stay in React, acts like <a> */}
            </div>
          </form>
        )}
        {this.state.makeBtnLargeAndCentered && (
          <div className="text-center mt-5 col-12">
            <Link
              to="#"
              type="submit"
              className="btn btn-block btn-primary"
              onClick={() => {
                this.showCreateAccountInputs();
                this.changeButtonFromLargeToRegular();
              }}
            >
              Create Account
            </Link>
            {/* Link used to stay in React, acts like <a> */}
          </div>
        )}
      </div>
    );
  }
}
