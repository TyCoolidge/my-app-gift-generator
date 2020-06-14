import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    // <!-- Example single danger button -->
    <div className="container">
      <div className="row mt-5">
        <div className="col-6 offset-3">
          <h1 className="text-center ">Gift Generator</h1>
        </div>
        <div className="col-12 ">
          <Link
            to="/login-page"
            type="button"
            class="float-right btn-sm btn-primary"
          >
            Share gift idea
          </Link>
        </div>
      </div>
      {/* Seperate row for titles of each select menu TODO: clean up code  */}
      <div className="row mt-3">
        <div className="col-3 text-center">
          <h5>Gender</h5>
        </div>
        <div className="col-3 text-center">
          <h5>Age Group</h5>
        </div>
        <div className="col-3 text-center">
          <h5>Interest</h5>
        </div>
        <div className="col-3 text-center">
          <h5>Price Range</h5>
        </div>
      </div>
      {/* TODO: add functionality */}
      <div className="row">
        <div className="col-3">
          <select className="custom-select bg-primary text-white">
            <option value="0">Nothing Selected</option>
            <option value="1">Male</option>
            <option value="2">Female</option>
            <option value="3">Gender Neutral</option>
          </select>
        </div>
        <div className="col-3">
          <select className="custom-select">
            <option selected>Nothing Selected</option>
            <option value="1">Under 12</option>
            <option value="2">12-17</option>
            <option value="3">18-24</option>
            <option value="4">25-34</option>
            <option value="5">35-44</option>
            <option value="6">45-54</option>
            <option value="7">55+</option>
          </select>
        </div>
        {/* Allow multiple selects */}
        <div className="col-3">
          <select className="custom-select">
            <option selected>Nothing Selected</option>
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
        {/* Maybe add dragbar to adjust range */}
        <div className="col-3">
          <select className="custom-select">
            <option selected>Nothing Selected</option>
            <option value="1">Under $25</option>
            <option value="2">$25-$50</option>
            <option value="3">$50-$75</option>
            <option value="4">$75-$100</option>
            <option value="5">$100-$200</option>
            <option value="5">$200+</option>
          </select>
        </div>
      </div>
      {/* Todo add style */}
      <h2 className="text-center my-5">Most Popular Gifts</h2>
      <div className="offset-4 col-6">
        <div>
          {/* Placeholders for now, come back to add components */}
          <div className="row mb-2">
            <div className="containsImage fitToImageContainer">
              <div className="col-5">
                <img alt="item" />
              </div>
            </div>
            <div className="col-5 ml-5">
              <text>Name: </text>
              <br />
              <br />
              <text>Description: </text>
              <br />
              <br />
              <text>Price: </text>
            </div>
          </div>
        </div>
        <div>
          <div className="row mb-2">
            <div className="containsImage fitToImageContainer">
              <div className="col-5">
                <img alt="item" />
              </div>
            </div>
            <div className="col-5 ml-5">
              <text>Name: </text>
              <br />
              <br />
              <text>Description: </text>
              <br />
              <br />
              <text>Price: </text>
            </div>
          </div>
        </div>
        <div>
          <div className="row mb-2">
            <div className="containsImage fitToImageContainer">
              <div className="col-5">
                <img alt="item" />
              </div>
            </div>
            <div className="col-5 ml-5">
              <text>Name: </text>
              <br />
              <br />
              <text>Description: </text>
              <br />
              <br />
              <text>Price: </text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
