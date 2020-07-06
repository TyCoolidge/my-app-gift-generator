import React from "react";
import { Link } from "react-router-dom";
import Header from "../ui/Header";
import IndividualGift from "../ui/IndividualGift";
import randomGifts from "../../mock-data/random-gifts";
// import orderBy from "lodash/orderBy";
import filter from "lodash/filter";
import _ from "lodash";

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayedGifts: filter(randomGifts),
      allGifts: filter(randomGifts),
      orderBy: filter(randomGifts), //default value
      ll: (randomGifts.price = _.range(0, 2501)),
    };
    console.log(this.state.ll);
  }
  filteringGifts() {
    const filteredArr = JSON.parse(this.state.orderBy);
    const orderedCards = filter(filteredArr);
    this.setState({ displayedGifts: orderedCards });
  }
  //TODO adjust filters so they do not overlap each other

  setGenderOrder(e) {
    this.setState({ orderBy: e.target.value }, () => {
      return this.filteringGifts(); // return the filteredCards that follow the order parameters
    });
    console.log(e.target.value);
  }
  setAgeOrder(e) {
    this.setState({ orderBy: e.target.value }, () => {
      return this.filteringGifts(); // return the filteredCards that follow the order parameters
    });
    console.log(e.target.value);
  }
  setInterestOrder(e) {
    this.setState({ orderBy: e.target.value }, () => {
      return this.filteringGifts(); // return the filteredCards that follow the order parameters
    });
    console.log(e.target.value);
  }
  setPriceOrder(e) {
    this.setState({ orderBy: e.target.value }, () => {
      return this.filteringGifts(); // return the filteredCards that follow the order parameters
    });
    console.log(e.target.value);
  }

  render() {
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
            <select
              className="custom-select"
              id="gender-dropdown"
              onChange={(e) => this.setGenderOrder(e)}
            >
              <option value={JSON.stringify(this.state.allGifts)}>
                Nothing Selected
              </option>
              <option
                value={JSON.stringify(filter(randomGifts, { gender: 1 }))}
              >
                Male
              </option>
              <option
                value={JSON.stringify(filter(randomGifts, { gender: 2 }))}
              >
                Female
              </option>
              <option
                value={JSON.stringify(filter(randomGifts, { gender: 3 }))}
              >
                Gender Neutral
              </option>
            </select>
          </div>
          <div className="col-3">
            <select
              className="custom-select"
              onChange={(e) => this.setGenderOrder(e)}
            >
              <option value={JSON.stringify(this.state.allGifts)}>
                Nothing Selected
              </option>
              <option value={JSON.stringify(filter(randomGifts, { age: 1 }))}>
                Under 12
              </option>
              <option value={JSON.stringify(filter(randomGifts, { age: 2 }))}>
                12-17
              </option>
              <option value={JSON.stringify(filter(randomGifts, { age: 3 }))}>
                18-24
              </option>
              <option value={JSON.stringify(filter(randomGifts, { age: 4 }))}>
                25-34
              </option>
              <option value={JSON.stringify(filter(randomGifts, { age: 5 }))}>
                35-44
              </option>
              <option value={JSON.stringify(filter(randomGifts, { age: 6 }))}>
                45-54
              </option>
              <option value={JSON.stringify(filter(randomGifts, { age: 7 }))}>
                55+
              </option>
              <option value={JSON.stringify(filter(randomGifts, { age: 8 }))}>
                All Ages
              </option>
            </select>
          </div>
          {/* Allow multiple selects */}
          <div className="col-3">
            <select
              className="custom-select"
              onChange={(e) => this.setGenderOrder(e)}
            >
              <option value={JSON.stringify(this.state.allGifts)}>
                Nothing Selected
              </option>
              <option
                value={JSON.stringify(filter(randomGifts, { interest: 1 }))}
              >
                Arts and Crafts
              </option>
              <option
                value={JSON.stringify(filter(randomGifts, { interest: 2 }))}
              >
                Collectibles
              </option>
              <option
                value={JSON.stringify(filter(randomGifts, { interest: 3 }))}
              >
                Electronics
              </option>
              <option
                value={JSON.stringify(filter(randomGifts, { interest: 4 }))}
              >
                Jewelry
              </option>
              <option
                value={JSON.stringify(filter(randomGifts, { interest: 5 }))}
              >
                Toys
              </option>
              <option
                value={JSON.stringify(filter(randomGifts, { interest: 6 }))}
              >
                Sports & Recreation
              </option>
              <option
                value={JSON.stringify(filter(randomGifts, { interest: 7 }))}
              >
                Outdoors
              </option>
              <option
                value={JSON.stringify(filter(randomGifts, { interest: 8 }))}
              >
                Music
              </option>
              <option
                value={JSON.stringify(filter(randomGifts, { interest: 9 }))}
              >
                Fashion
              </option>
              <option
                value={JSON.stringify(filter(randomGifts, { interest: 10 }))}
              >
                Games
              </option>
              <option
                value={JSON.stringify(filter(randomGifts, { interest: 11 }))}
              >
                Home Appliances
              </option>
            </select>
          </div>
          {/* Maybe add dragbar to adjust range */}
          <div className="col-3">
            <select
              className="custom-select"
              onChange={(e) => this.setGenderOrder(e)}
            >
              <option value={JSON.stringify(this.state.allGifts)}>
                Nothing Selected
              </option>
              <option
                value={JSON.stringify(
                  filter(randomGifts, { price: 2500 || 2000 })
                )}
                // add ranges for prices
              >
                Under $25
              </option>
              <option
                value={JSON.stringify(filter(randomGifts, { price: 5000 }))}
              >
                $25-$50
              </option>
              <option
                value={JSON.stringify(
                  filter(randomGifts, { price: 5000 - 7500 })
                )}
              >
                $50-$75
              </option>
              <option
                value={JSON.stringify(
                  filter(randomGifts, { price: 7500 - 10000 })
                )}
              >
                $75-$100
              </option>
              <option
                value={JSON.stringify(
                  filter(randomGifts, { price: 10000 - 20000 })
                )}
              >
                $100-$200
              </option>
              <option
                value={JSON.stringify(
                  filter(randomGifts, { price: 20000 - 1000000 })
                )}
              >
                $200+
              </option>
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
          {this.state.displayedGifts.map((gifts) => {
            return (
              <IndividualGift
                title={gifts.title}
                description={gifts.description}
                price={(gifts.price / 100).toFixed(2)}
                key={gifts.id}
              />
            );
            //filter comes first "higher order"
          })}
        </div>
      </div>
    );
  }
}
