import React from "react";
import { Link } from "react-router-dom";
import Filters from "../ui/Filters";
import Header from "../ui/Header";
import IndividualGift from "../ui/IndividualGift";
import randomGifts from "../../mock-data/random-gifts";

export default function HomePage() {
  return (
    // <!-- Example single danger button -->
    <div className="container">
      <div className="row mt-5">
        <Header />
      </div>
      {/* Seperate row for titles of each select menu TODO: clean up code  */}
      <Filters />
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
