import React from "react";
import { Link } from "react-router-dom";
import Header from "../ui/Header";
import IndividualGift from "../ui/IndividualGift";
import randomGifts from "../../mock-data/random-gifts";

export default function HomePage() {
  return (
    // <!-- Example single danger button -->
    <div className="container">
      <div className="row mt-5">
        <div className="col">
          {/* change state, if not logged in direct those to login page */}
          <Link to="/account-page" className="">
            My Account
          </Link>
          {/* change state, if user is logged in, change to log out, if user clicks this login link then redirect to this page */}
          <Link to="/login-page" className="float-right">
            Log In
          </Link>
        </div>
      </div>
      <div className="row mt-1">
        <Header />
      </div>
      {/* Seperate row for titles of each select menu TODO: clean up code  */}
      <div className="row mt-3">
        <div className="col-3">
          <h5>Gender</h5>
        </div>
        <div className="col-3">
          <h5>Age Group</h5>
        </div>
        <div className="col-3">
          <h5>Interest</h5>
        </div>
        <div className="col-3">
          <h5>Price Range</h5>
        </div>
      </div>
      {/* TODO: add functionality */}
      <div className="row">
        <div className="col-3">
          <select className="custom-select" id="gender-dropdown">
            <option value="0">Nothing Selected</option>
            <option value='[["gender"][1]], ["desc", "desc"]]'>Male</option>
            <option value='[["gender", "1"], ["desc", "desc"]]'>Female</option>
            <option value='[["gender", "3"], ["desc", "desc"]]'>
              Gender Neutral
            </option>
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
            <option value="11">Home Appliances</option>
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
      <div className="row my-4">
        <div className="col-6">
          <h2 className="">Most Popular Gifts</h2>
        </div>

        <div className="col-6">
          <Link to="/login-page" className="float-right btn btn-primary">
            Share gift idea
          </Link>
        </div>
      </div>
      <div className="mb-2 ">
        {/* map method use to iterate through randomGifts array returning the values shown below from our data */}
        {randomGifts.map((gifts) => {
          return (
            <IndividualGift
              title={gifts.title}
              desc={gifts.desc}
              price={gifts.price}
              key={gifts.id}
            />
          );
        })}
        {/* gift share button */}
      </div>
    </div>
  );
}
