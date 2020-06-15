import React from "react";
import { Link } from "react-router-dom";

export default function AddGiftName() {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-6 offset-3">
          <Link to="/">
            <h1 className="text-center ">Gift Generator</h1>
          </Link>
        </div>
        <div className="col-12 ">
          <Link to="/" type="button" className="float-right btn-sm btn-primary">
            Go back to gift generator
          </Link>
        </div>
      </div>
      {/* Title form */}
      <div className="card border-primary mt-4">
        <div className="card-body">
          <div className="form-group row mt-4">
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
              Title:
            </label>
            <div className="col-sm-10">
              <input
                type="title"
                className="form-control"
                placeholder="Name of item"
              />
            </div>
          </div>
          {/* Photo insert */}
          <form className="form-group row mt-4">
            <div className="col-sm-2">
              <label htmlFor="Photo">Photo:</label>
            </div>
            <div className="col-sm-10">
              <input type="file" />
            </div>
          </form>
          {/* desc box */}
          <div className="form-group row mt-4">
            <div className="col-sm-2">
              <label htmlFor="exampleFormControlTextarea1">Description:</label>
            </div>
            <div className="col-sm-10">
              <textarea className="form-control" rows="3">
                Enter text here...
              </textarea>
            </div>
          </div>
          {/* Gender either checkbox or buttons */}
          <div className="form-group row mt-4">
            <label
              htmlFor="inputPassword"
              className="col-sm-2 col-form-label"
              style={{ marginRight: "3px" }}
            >
              Gender:
            </label>
            <div class="col-sm-3 ml-4">
              <button type="button" class="btn btn-primary btn-block">
                Male
              </button>
            </div>
            <div class="col-sm-3">
              <button type="button" class="btn btn-success btn-block">
                Female
              </button>
            </div>
            <div class="col-sm-3">
              <button type="button" class="btn btn-warning btn-block">
                Gender Neutral
              </button>
            </div>
          </div>
          {/*  */}
          {/* TODO add tag autocomplete*/}
          <div className="form-group row mt-4">
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
              Interest:
            </label>
            {/* TODO add multiselect with tags, need to make a component? */}
            <div className="col-sm-3"></div>
          </div>
          <div className="form-group row mt-4">
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
              Age:
            </label>
            <div className="col-3">
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
          <div className="form-group row my-4 ">
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
              Price:
            </label>
            <div className="input-group col-sm-3">
              <div className="input-group-prepend">
                <span class="input-group-text transparent-dollar-sign">$</span>
              </div>
              <input type="title" className="form-control" placeholder="0.00" />
            </div>
            <div className="col-sm-6 mt-2 text-danger">
              Please enter numbers only
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
