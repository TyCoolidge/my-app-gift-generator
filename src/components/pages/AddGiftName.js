import React from "react";
import { Link } from "react-router-dom";
import Header from "../ui/Header";

export default function AddGiftName() {
  return (
    <div className="container">
      <div className="row mt-5">
        <Header />
        {/* TODO make cols a component */}
        <div className="col-12 col-sm-12 col-md-12 col-lg-8 offset-lg-2 col-xl-10 offset-xl-1">
          <Link to="/" className="float-left">
            Go back
          </Link>
        </div>
      </div>
      {/* Title form */}
      <div className="card col-12 col-sm-12 col-md-12 col-lg-8 offset-lg-2 col-xl-10 offset-xl-1 border-primary mt-2 mb-4">
        <div className="card-body">
          <h2 className="card-title text-center" style={{ fontSize: "20px" }}>
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
              <input type="file" class="form-control-file roundedFile" />
            </div>
          </form>
          {/* Web link */}
          <form className="form-group row mt-4">
            <label
              for="example-url-input"
              class="col-sm-3 col-md-2 col-form-label"
            >
              URL:
            </label>
            <div class="col-sm-9 col-md-10">
              <input
                class="form-control"
                type="url"
                value="https://getbootstrap.com"
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
              <textarea className="form-control" rows="3">
                Enter text here...
              </textarea>
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
            <div class="col-sm-3 col-md-3 mb-2">
              <button type="button" class="btn btn-primary btn-block">
                Male
              </button>
            </div>
            <div class="col-sm-3 col-md-3 mb-2">
              <button type="button" class="btn btn-success btn-block">
                Female
              </button>
            </div>
            <div class="col-sm-3 col-md-3 mb-2">
              <button type="button" class="btn btn-warning btn-block">
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
            <div className="col-sm-4 col-4">
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
            <div className="input-group col-sm-4 col-4">
              <div className="input-group-prepend">
                <span class="input-group-text transparent-dollar-sign">$</span>
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
