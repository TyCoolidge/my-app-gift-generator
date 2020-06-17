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
      <h2 className="text-center my-5">Most Popular Gifts</h2>
      <div className="row mb-2">
        {/* gift share button */}
        {randomGifts.map((gifts) => {
          return (
            <IndividualGift
              title={gifts.title}
              desc={gifts.desc}
              price={gifts.price}
            />
          );
        })}

        <div className="col-12 mt-5">
          <Link to="/login-page" className="float-right btn-lg btn-primary">
            Share gift idea
          </Link>
        </div>
      </div>
    </div>
  );
}
