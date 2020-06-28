import React from "react";
import { withRouter, Link } from "react-router-dom";
import Header from "../ui/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
import classnames from "classnames";
import { checkIsOver } from "../utils/helpers";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import { v4 as getUuid } from "uuid";
import { users } from "../../mock-data/users";

class AddGiftPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //if any errors
      hasBlankInputs: "",

      //title
      titleText: "",
      hasTitleError: false,
      hasTitleSuccess: false,
      //photo
      photoUrl: "",
      hasPhotoError: false,
      hasPhotoSuccess: false,
      uploadFile: "Choose file...",
      //url
      hasUrlError: false,
      hasUrlSuccess: false,
      //description
      descText: "",
      hasDescError: false,
      hasDescSuccess: false,
      //gender
      isGenderSelected: false,
      signUpGenderSelect: "",
      //interest
      setInterestSelected: "",
      hasInterestError: false,
      hasInterestSuccess: false,
      //age
      setAgeSelected: "",
      hasAgeError: false,
      hasAgeSuccess: false,
      //price
      priceTyped: "",
      priceWarning: "",
      hasPriceError: false,
      hasPriceSuccess: false,
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
  setPriceNumber(e) {
    this.setState({ priceTyped: e.target.value });
  }
  setGenderValue(e) {
    this.setState({ signUpGenderSelect: e.target.value });
  }
  setInterestValue(e) {
    this.setState({ setInterestSelected: e.target.value });
  }
  setAgeValue(e) {
    this.setState({ setAgeSelected: e.target.value });
  }

  async checkForTitleError(titleInput) {
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

  async checkForPhotoError(photoInput) {
    // var photoData = photoInput.toString();
    if (photoInput === "") {
      this.setState({
        hasPhotoError: true,
      });
    } else {
      this.setState({ hasPhotoError: false, hasPhotoSuccess: true });
    }
  }

  async checkForUrlError(urlInput) {
    const urlRegex = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
    if (urlRegex.test(urlInput) === false) {
      this.setState({ hasUrlError: true });
    } else if (urlInput === "") {
      this.setState({
        hasUrlError: true,
      });
    } else {
      this.setState({ hasUrlError: false, hasUrlSuccess: true });
    }
  }

  async checkForDescError(descInput) {
    if (descInput === "") {
      this.setState({
        hasDescError: true,
      });
    } else if (checkIsOver(this.state.descText, 200) === true) {
      this.setState({ hasDescError: true });
    } else {
      this.setState({
        hasDescError: false,
        hasDescSuccess: true,
      });
    }
  }

  async checkIfGenderIsSelected(signUpGenderSelect) {
    if (signUpGenderSelect === "") {
      this.setState({ isGenderSelected: true });
    } else {
      this.setState({ isGenderSelected: false });
    }
  }

  async checkForInterestError(setInterestSelected) {
    if (setInterestSelected === "" || setInterestSelected === "0") {
      this.setState({ hasInterestError: true });
    } else {
      this.setState({ hasInterestError: false, hasInterestSuccess: true });
    }
  }

  async checkForAgeError(setAgeSelected) {
    if (setAgeSelected === "" || setAgeSelected === "0") {
      this.setState({ hasAgeError: true });
    } else {
      this.setState({ hasAgeError: false, hasAgeSuccess: true });
    }
  }

  async checkForPriceError(priceInput) {
    const priceRegex = /^\$?([0-9]{1,3},([0-9]{3},)*[0-9]{3}|[0-9]+)(.[0-9][0-9])?$/g;
    //http://regexlib.com/Search.aspx?k=currency
    if (priceInput === "") {
      this.setState({
        hasPriceError: true,
        priceWarning: "Please enter a price",
      });
    } else if (priceRegex.test(priceInput) === false) {
      this.setState({
        hasPriceError: true,
        priceWarning: "Please enter numbers only",
      });
    } else {
      this.setState({
        hasPriceError: false,
        hasPriceSuccess: true,
      });
    }
  }

  async validateGiftInfo() {
    const titleInput = document.getElementById("title-input").value;
    const photoInput = document.getElementById("photo-input").value;
    const urlInput = document.getElementById("url-input").value;
    const descInput = document.getElementById("desc-input").value;
    const signUpGenderSelect = this.state.signUpGenderSelect;
    // const maleSelect = document.getElementById("option1").value;
    // const femaleSelect = document.getElementById("option2").value;
    // const neutralSelect = document.getElementById("option3").value;
    //TODO seperate id for each  btn
    const setInterestSelected = this.state.setInterestSelected;
    const setAgeSelected = this.state.setAgeSelected;

    // const ageInput = document.getElementById("age-input").value;
    const priceInput = document.getElementById("price-input").value;
    await this.checkForTitleError(titleInput);
    await this.checkForPhotoError(photoInput);
    await this.checkForUrlError(urlInput);
    await this.checkForDescError(descInput);
    await this.checkIfGenderIsSelected(signUpGenderSelect);
    await this.checkForInterestError(setInterestSelected);
    await this.checkForAgeError(setAgeSelected);
    await this.checkForPriceError(priceInput);
    if (
      titleInput === "" ||
      photoInput === "" ||
      urlInput === "" ||
      descInput === "" ||
      signUpGenderSelect === "" ||
      setInterestSelected === "" ||
      setAgeSelected === "" ||
      priceInput === ""
    ) {
      this.setState({
        hasBlankInputs: "All input must be filled out",
      });
    } else {
      this.setState({
        hasBlankInputs: "",
      });
    }
    if (
      this.state.hasTitleError === false &&
      this.state.hasPhotoError === false &&
      this.state.hasUrlError === false &&
      this.state.hasDescError === false &&
      this.state.isGenderSelected === false &&
      this.state.hasInterestError === false &&
      this.state.hasAgeError === false &&
      this.state.hasPriceError === false
    ) {
      const userId = users[0].id;
      const newGift = {
        id: getUuid(),
        createdAt: Date.now(),
        createdByUserId: userId,
        // go back and fix, ask Mike how to grab data
        title: titleInput,
        photo: photoInput,
        url: urlInput,
        desc: descInput,
        gender: signUpGenderSelect,
        interest: setInterestSelected,
        age: setAgeSelected,
        price: priceInput,
      };
      console.log(newGift);
      this.props.history.push("/");
    }
  }
  // id: "501f6331-3273-416c-a40b-e06d2c8440fd",
  //   createdAt: 1592855191798,
  //   createdByUserId: "dbffe071-b5f6-4e70-8df7-2583fd274345",
  //   title: "Vitamix",
  //   photo: String,
  //   url: String,
  //   desc: "Description Text",
  //   gender: "Gender Neutral",
  //   interest: "Home Appliances",
  //   age: 3, //MVP only allow one filter
  //   price: 20000,

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
              <big className="form-text text-danger text-center mt-3">
                All fields need to be filled out
              </big>
            )}

            <div className="form-group row mt-1">
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
                <div className="custom-file">
                  <input
                    type="file"
                    className={classnames({
                      "custom-file-input": true,
                      "is-invalid": this.state.hasPhotoError,
                      "is-valid": this.state.hasPhotoSuccess,
                    })}
                    id="photo-input"
                    onChange={(e) => this.setPhotoText(e)}
                  />
                  <label
                    className="custom-file-label"
                    id="file-upload-filename"
                  >
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
                  className={classnames({
                    "form-control": true,
                    "is-invalid": this.state.hasUrlError,
                    "is-valid": this.state.hasUrlSuccess,
                  })}
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
                  className={classnames({
                    "form-control": true,
                    "is-invalid": this.state.hasDescError,
                    "is-valid": this.state.hasDescSuccess,
                  })}
                  rows="3"
                  placeholder="Enter text here..."
                  onChange={(e) => this.setDescText(e)}
                  id="desc-input"
                ></textarea>
                <span
                  className={classnames({
                    "text-danger": checkIsOver(this.state.descText, 200),
                    "float-right": true,
                  })}
                >
                  {this.state.descText.length}/200
                </span>
              </div>
            </div>
            {/* Gender either checkbox or buttons */}
            <div id="">
              <div className=" row mt-3">
                <label
                  htmlFor="inputPassword"
                  className="col-sm-3 col-md-2 col-form-label"
                >
                  Gender:
                </label>
                {/* place in own forms */}

                <ToggleButtonGroup className="col" type="radio" name="options">
                  <ToggleButton
                    className={classnames({
                      "button-outline": true,
                      "danger-button": this.state.isGenderSelected,
                      "col-5": true,
                      btn: true,
                      // "btn-outline-primary": true,
                      "mr-2": true,
                      rounded: true,
                    })}
                    value={"1"}
                    type="radio"
                    name="options"
                    id="option1"
                    checked={this.state.signUpGenderSelect === "option1"}
                    onChange={(e) => this.setGenderValue(e)}
                    onClick={() => {
                      this.checkIfGenderIsSelected();
                    }}
                  >
                    Male
                  </ToggleButton>
                  <ToggleButton
                    className={classnames({
                      "button-outline": true,
                      "danger-button": this.state.isGenderSelected,
                      "col-4": true,
                      btn: true,
                      // "btn-outline-primary": true,
                      "mr-2": true,
                      rounded: true,
                    })}
                    value={"2"}
                    type="radio"
                    name="options"
                    id="option2"
                    checked={this.state.signUpGenderSelect === "option2"}
                    onChange={(e) => this.setGenderValue(e)}
                    onClick={() => {
                      this.checkIfGenderIsSelected();
                    }}
                  >
                    Female
                  </ToggleButton>
                  <ToggleButton
                    className={classnames({
                      "button-outline": true,
                      "danger-button": this.state.isGenderSelected,
                      "col-4": true,
                      btn: true,
                      // "btn-outline-primary": true,
                      rounded: true,
                    })}
                    value={"3"}
                    type="radio"
                    name="options"
                    id="option3"
                    checked={this.state.signUpGenderSelect === "option3"}
                    onChange={(e) => this.setGenderValue(e)}
                    onClick={() => {
                      this.checkIfGenderIsSelected();
                    }}
                  >
                    Neutral
                  </ToggleButton>
                </ToggleButtonGroup>
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
                <select
                  className={classnames({
                    "custom-select": true,
                    "is-invalid": this.state.hasInterestError,
                    "is-valid": this.state.hasInterestSuccess,
                  })}
                  id="interest-input"
                  checked={this.state.setInterestSelected === "interest-input"}
                  onChange={(e) => this.setInterestValue(e)}
                >
                  <option value="0">Nothing Selected</option>
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
                  <option value="11">Home Appliances</option>
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
                <select
                  className={classnames({
                    "custom-select": true,
                    "is-invalid": this.state.hasAgeError,
                    "is-valid": this.state.hasAgeSuccess,
                  })}
                  id="age-input"
                  checked={this.state.setAgeSelected === "age-input"}
                  onChange={(e) => this.setAgeValue(e)}
                >
                  <option value="0">-----</option>
                  <option value="1">Under 12</option>
                  <option value="2">12-17</option>
                  <option value="3">18-24</option>
                  <option value="4">25-34</option>
                  <option value="5">35-44</option>
                  <option value="6">45-54</option>
                  <option value="7">55+</option>
                </select>
              </div>
            </div>
            {/* Price */}
            <div className="form-group row my-4 ">
              <label
                htmlFor="inputPassword"
                className="col-sm-3 col-md-2 col-form-label"
              >
                Price:
              </label>
              <div className="input-group  col-sm-4 col-6 col-md-3 col-lg-3 col-xl-2 ">
                <div className="input-group-prepend ">
                  <span
                    className={classnames({
                      "border-danger": this.state.hasPriceError,
                      "border-success": this.state.hasPriceSuccess,
                      numberSignBackground: true,
                      "input-group-text": true,
                      "transparent-dollar-sign": true,
                    })}
                  >
                    $
                  </span>
                </div>
                <input
                  type="title"
                  className={classnames({
                    "form-control": true,
                    "is-invalid": this.state.hasPriceError,
                    "is-valid": this.state.hasPriceSuccess,
                  })}
                  placeholder="0.00"
                  id="price-input"
                  onChange={(e) => this.setPriceNumber(e)}
                />
              </div>

              {this.state.hasPriceError && (
                <div className="mt-2 text-danger">
                  {this.state.priceWarning}
                </div>
              )}
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

export default withRouter(AddGiftPage);
