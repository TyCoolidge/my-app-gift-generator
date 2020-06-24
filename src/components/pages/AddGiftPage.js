import React from "react";
import { Link } from "react-router-dom";
import Header from "../ui/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
import classnames from "classnames";
import { checkIsOver } from "../utils/helpers";

export default class AddGiftPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //if any errors
      hasBlankInputs: false,
      descText: "",
      //title
      titleText: "",
      hasTitleError: false,
      hasTitleSuccess: false,
      //photo
      photoUrl: "",
      hasPhotoError: false,
      hasPhotoSuccess: false,
      uploadFile: "Choose file...",
    };
  }
  setTitleText(e) {
    this.setState({ titleText: e.target.value });
  }
  setDescText(e) {
    this.setState({ descText: e.target.value });
  }
  setPhotoText(e) {
    this.setState({ uploadFile: e.target.value });
  }

  checkForTitleError(titleInput) {
    if (titleInput === "") {
      this.setState({
        hasTitleError: true,
      });
    } else if (checkIsOver(this.state.titleText, 50) === true) {
      this.setState({ hasTitleError: true });
    } else {
      this.setState({
        hasTitleError: false,
        hasTitleSuccess: true,
      });
    }
  }

  checkForPhotoError(photoInput) {
    var photoData = photoInput.toString();
    console.log(photoData);
    if (photoInput === "") {
      this.setState({
        hasPhotoError: true,
      });
    } else {
      this.setState({ hasPhotoError: false });
    }
  }
  validateGiftInfo() {
    const titleInput = document.getElementById("title-input").value;
    const photoInput = document.getElementById("photo-input").value;
    // const urlInput = document.getElementById("url-input").value;
    // const descInput = document.getElementById("desc-input").value;
    // const genderInput = document.getElementById("gender-input").value;
    // const interestInput = document.getElementById("interest-input").value;
    // const ageInput = document.getElementById("age-input").value;
    // const priceInput = document.getElementById("price-input").value;
    this.checkForTitleError(titleInput);
    this.checkForPhotoError(photoInput);
    if (titleInput === "") {
      this.setState({
        hasBlankInputs: true,
      });
    } else {
      this.setState({
        hasBlankInputs: false,
      });
    }
  }
  // checkIfTitleHasInvalidCharCount() {
  //   if (this.state.titleText.length > 50) {
  //     return true;
  //   } else return false;
  // }
  render() {
    return (
      <div className="container">
        <div className="row mt-5">
          <Header />
          {/* TODO make cols a component */}
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-8 offset-lg-2 col-xl-10 offset-xl-1 mb-3">
          <Link to="/" className="">
            <FontAwesomeIcon
              icon={faLongArrowAltLeft}
              style={{ fontSize: "40px" }}
              className=""
            />
          </Link>
        </div>
        {/* Title form */}
        <div className="col-12 col-sm-12 col-md-12 col-lg-8 offset-lg-2 col-xl-10 offset-xl-1 mt-2 mb-4">
          <div className="">
            <h2 className="card-title" style={{ fontSize: "20px" }}>
              Add or Edit Gift
            </h2>
            {this.state.hasBlankInputs && (
              <big className="form-text text-danger text-center">
                All fields need to be filled out
              </big>
            )}

            <div className="form-group row mt-3">
              <label
                htmlFor="inputPassword"
                className="col-sm-3 col-md-2 col-form-label"
              >
                Title:
              </label>
              <div className="col-sm-9 col-md-10">
                <input
                  type="title"
                  className={classnames({
                    "form-control": true,
                    "is-invalid": this.state.hasTitleError,
                    "is-valid": this.state.hasTitleSuccess,
                  })}
                  placeholder="Name of item"
                  onChange={(e) => this.setTitleText(e)}
                  id="title-input"
                />
                <span
                  className={classnames({
                    "text-danger": checkIsOver(this.state.titleText, 50),
                    "float-right": true,
                  })}
                >
                  {this.state.titleText.length}/50
                </span>
              </div>
            </div>
            {/* Photo insert */}
            <form className="form-group row mt-1">
              <div className="col-sm-3 col-md-2 col-form-label">
                <label htmlFor="Photo">Photo:</label>
              </div>
              <div className="col-sm-9 col-md-10">
                <div class="custom-file">
                  <input
                    type="file"
                    className={classnames({
                      "custom-file-input": true,
                      "is-invalid": this.state.hasPhotoError,
                    })}
                    id="photo-input"
                    onChange={(e) => this.setPhotoText(e)}
                  />
                  <label class="custom-file-label" id="file-upload-filename">
                    {this.state.uploadFile}
                  </label>
                </div>

                {/* <input
                  type="file"
                  className={classnames({
                    "custom-file-input": true,
                    "invalid-feedback": this.state.hasPhotoError,
                    "is-valid": this.state.hasPhotoSuccess,
                  })}
                  id="photo-input"
                /> */}
              </div>
            </form>
            {/* Web link */}
            <form className="form-group row mt-4">
              <label
                htmlFor="example-url-input"
                className="col-sm-3 col-md-2 col-form-label"
              >
                URL:
              </label>
              <div className="col-sm-9 col-md-10">
                <input
                  className="form-control"
                  type="url"
                  placeholder="https://getbootstrap.com"
                  id="url-input"
                />
              </div>
            </form>
            {/* desc box */}
            <div className="form-group row mt-4">
              <div className="col-sm-3 col-md-2">
                <label htmlFor="exampleFormControlTextarea1">
                  Description:
                </label>
              </div>
              <div className="col-sm-9 col-md-10">
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Enter text here..."
                  onChange={(e) => this.setDescText(e)}
                  id="desc-input"
                ></textarea>
                <span
                  className={classnames({
                    "text-danger": checkIsOver(this.state.descText, 250),
                    "float-right": true,
                  })}
                >
                  {this.state.descText.length}/200
                </span>
              </div>
            </div>
            {/* Gender either checkbox or buttons */}
            <div id="gender-input">
              <div className="form-group row mt-3">
                <label
                  htmlFor="inputPassword"
                  className="col-sm-3 col-md-2 col-form-label"
                >
                  Gender:
                </label>
                <div className="col-sm-3 col-md-3 mb-2">
                  <button type="button" className="btn btn-primary btn-block">
                    Male
                  </button>
                </div>
                <div className="col-sm-3 col-md-3 mb-2">
                  <button type="button" className="btn btn-success btn-block">
                    Female
                  </button>
                </div>
                <div className="col-sm-3 col-md-3 mb-2">
                  <button type="button" className="btn btn-warning btn-block">
                    Neutral
                  </button>
                </div>
              </div>
            </div>
            {/*  */}
            {/* TODO add tag autocomplete*/}
            <div className="form-group row mt-4">
              <label
                htmlFor="inputPassword"
                className="col-sm-3 col-md-2 col-form-label"
              >
                Interest:
              </label>
              <div className="col-sm-5">
                <select className="custom-select" id="interest-input">
                  <option value>Nothing Selected</option>
                  <option value="1">Arts and Crafts</option>
                  <option value="2">Collectibles</option>
                  <option value="3">Electronics</option>
                  <option value="4">Jewelry</option>
                  <option value="5">Toys</option>
                  <option value="6">Sports & Recreation</option>
                  <option value="7">Outdoors</option>
                  <option value="8">Music</option>
                  <option value="9">Fashion</option>
                  <option value="10">Games</option>
                </select>
              </div>
              {/* TODO add multiselect with tags, need to make a component? */}
              {/* Age */}
              <div className="col-sm-3"></div>
            </div>
            <div className="form-group row mt-4">
              <label
                htmlFor="inputPassword"
                className="col-sm-3 col-md-2 col-form-label"
              >
                Age:
              </label>
              <div className="col-sm-4 col-6 col-md-3 col-lg-3 col-xl-2">
                <select className="custom-select" id="age-input">
                  <option value>-----</option>
                  <option value="1">Under 12</option>
                  <option value="2">12-17</option>
                  <option value="3">18-24</option>
                  <option value="4">25-34</option>
                  <option value="5">35-44</option>
                  <option value="6">45-54</option>
                  <option value="7">55+</option>
                </select>
              </div>
              {/* TODO javascript for dragbar */}
              {/* <div class="d-flex justify-content-center my-4">
              <div class="w-75">
                <input
                  type="range"
                  class="custom-range"
                  id="customRange11"
                  min="0"
                  max="200"
                />
              </div>
              <span class="font-weight-bold text-primary ml-2 valueSpan2"></span>
            </div> */}
            </div>
            {/* Price */}
            <div className="form-group row my-4 ">
              <label
                htmlFor="inputPassword"
                className="col-sm-3 col-md-2 col-form-label"
              >
                Price:
              </label>
              <div className="input-group col-sm-4 col-6 col-md-3 col-lg-3 col-xl-2">
                <div className="input-group-prepend">
                  <span className="input-group-text transparent-dollar-sign">
                    $
                  </span>
                </div>
                <input
                  type="title"
                  className="form-control"
                  placeholder="0.00"
                  id="price-input"
                />
              </div>
              <div className="mt-2 text-danger">Please enter numbers only</div>
            </div>
            <Link
              to="#"
              className="btn btn-primary btn-lg btn-block mt-5 mb-3"
              onClick={() => {
                this.validateGiftInfo();
              }}
            >
              Submit Gift
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
