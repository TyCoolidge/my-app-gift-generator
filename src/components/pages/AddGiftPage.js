import React from "react";
import { Link } from "react-router-dom";
import Header from "../ui/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";

export default function AddGiftPage() {
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
                className="form-control"
                placeholder="Name of item"
              />
            </div>
          </div>
          {/* Photo insert */}
          <form className="form-group row mt-4">
            <div className="col-sm-3 col-md-2">
              <label htmlFor="Photo">Photo:</label>
            </div>
            <div className="col-sm-9 col-md-10">
              <input type="file" className="form-control-file roundedFile" />
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
                id="example-url-input"
              />
            </div>
          </form>
          {/* desc box */}
          <div className="form-group row mt-4">
            <div className="col-sm-3 col-md-2">
              <label htmlFor="exampleFormControlTextarea1">Description:</label>
            </div>
            <div className="col-sm-9 col-md-10">
              <textarea
                className="form-control"
                rows="3"
                placeholder="Enter text here..."
              ></textarea>
            </div>
          </div>
          {/* Gender either checkbox or buttons */}
          <div className="form-group row mt-4">
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
              <select className="custom-select">
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
              <select className="custom-select">
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
              <input type="title" className="form-control" placeholder="0.00" />
            </div>
            <div className="mt-2 text-danger">Please enter numbers only</div>
          </div>
          <Link to="/" className="btn btn-primary btn-lg btn-block mt-5 mb-3">
            Submit Gift
          </Link>
        </div>
      </div>
    </div>
  );
}
