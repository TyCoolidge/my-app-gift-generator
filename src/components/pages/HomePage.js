import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    // <!-- Example single danger button -->
    <div className="container">
      <div className="row mt-5">
        <div className="col-xl-6 offset-xl-3 col-8 offset-2">
          <Link to="/">
            <h2 className="text-center ">Gift Generator</h2>
          </Link>
        </div>
        <div className="col-12 ">
          <Link
            to="/login-page"
            type="button"
            className="float-right btn-sm btn-primary"
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
            <option value>Nothing Selected</option>
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
        {/* Maybe add dragbar to adjust range */}
        <div className="col-3">
          <select className="custom-select">
            <option value>Nothing Selected</option>
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
      <div className="row mb-2">
        <div className="col-5 offset-1 col-sm-5 offset-sm-1 col-md-4 offset-md-2 col-lg-3 offset-lg-3 col-xl-3 offset-xl-3">
          {/* Placeholders for now, come back to add components */}
          <div className="containsImage fitToImageContainer">
            <div className="col-5">
              <img alt="item" />
            </div>
          </div>
        </div>
        <div className="">
          <div className=" mt-1 giftInfoSize">
            <p>Name: Placeholder</p>
            <p>Description: Placeholder</p>
            <p>Price: Placeholder</p>
          </div>
        </div>
        {/* 
        <div className="row mb-2">
          <div className="containsImage fitToImageContainer">
            <div className="col-5">
              <img alt="item" />
            </div>
          </div>
          <div className="col-5 ml-5 mt-3 giftInfoSize">
            <p>Name: </p>
            <p>Description: </p>
            <p>Price: </p>
          </div>
        </div>

        <div className="row mb-2">
          <div className="containsImage fitToImageContainer">
            <div className="col-5">
              <img alt="item" />
            </div>
          </div>
          <div className="col-5 ml-5 mt-3 giftInfoSize">
            <p>Name: </p>
            <p>Description: </p>
            <p>Price: </p>
          </div>
        </div> */}
      </div>
    </div>
  );
}
