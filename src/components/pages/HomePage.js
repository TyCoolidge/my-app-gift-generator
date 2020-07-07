import React from "react";
import { Link } from "react-router-dom";
import Header from "../ui/Header";
import IndividualGift from "../ui/IndividualGift";
import gifts from "../../mock-data/gifts";
// import orderBy from "lodash/orderBy";
import filter from "lodash/filter";
import _ from "lodash";
import axios from "axios";
import { connect } from "react-redux";
import actions from "../../store/actions";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    axios
      .get("https://run.mocky.io/v3/e3a916f2-e011-4d6a-8260-2d0a4d1cbf85")
      .then(function (res) {
        console.log(res);
        props.dispatch({
          type: actions.STORE_ALL_GIFTS,
          payload: res.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });

    /* user: []
       currentGift: []
       (when clicking edit page)

      TODO for redux
       add redux to keep user logged in and only display the gifts they created, when clicking on edit button on account page, use redux to fillin the inputs on create gift.
       if user is not logged in, account link redirects to login page. Save gift information to global state to populate to main page
       */

    this.state = {
      displayedGifts: gifts,
      allGifts: gifts,
      gender: 0,
      age: 0,
      interest: 0,
      price: 0,
    };
  }

  setGender(e) {
    this.setState({ gender: Number(e.target.value) }, () => {
      this.setDisplayedGifts();
    });
  }
  setAge(e) {
    this.setState({ age: Number(e.target.value) }, () => {
      this.setDisplayedGifts();
    });
  }
  setInterest(e) {
    this.setState({ interest: Number(e.target.value) }, () => {
      this.setDisplayedGifts();
    });
  }
  setPrice(e) {
    this.setState({ price: Number(e.target.value) }, () => {
      this.setDisplayedGifts();
    });
  }
  setDisplayedGifts() {
    const gifts = [...this.state.allGifts];
    if (this.state.gender !== 0) {
      //if gender is selected
      const filteredGifts = gifts.filter((gift) => {
        return gift.gender === this.state.gender;
      });
      this.setState({ displayedGifts: filteredGifts });
    }
    if (this.state.age !== 0) {
      //if age is selected
      const filteredGifts = gifts.filter((gift) => {
        return gift.age === this.state.age;
      });
      this.setState({ displayedGifts: filteredGifts });
    }
    if (this.state.interest !== 0) {
      //if interest is selected
      const filteredGifts = gifts.filter((gift) => {
        return gift.interest === this.state.interest;
      });
      this.setState({ displayedGifts: filteredGifts });
    }
    if (this.state.price !== 0) {
      //if price is selected
      const filteredGifts = gifts.filter((gift) => {
        return gift.price === this.state.price;
      });
      this.setState({ displayedGifts: filteredGifts });
    }
    //price ranges start
    if (this.state.price === 1) {
      //if price is selected
      const filteredGifts = gifts.filter((gift) => {
        return gift.price <= 2500;
      });
      this.setState({ displayedGifts: filteredGifts });
    } else if (this.state.price === 2) {
      //if price is selected
      const filteredGifts = gifts.filter((gift) => {
        return gift.price > 2500 && gift.price <= 5000;
      });
      this.setState({ displayedGifts: filteredGifts });
    } else if (this.state.price === 3) {
      //if price is selected
      const filteredGifts = gifts.filter((gift) => {
        return gift.price > 5000 && gift.price <= 7500;
      });
      this.setState({ displayedGifts: filteredGifts });
    } else if (this.state.price === 4) {
      //if price is selected
      const filteredGifts = gifts.filter((gift) => {
        return gift.price > 7500 && gift.price <= 10000;
      });
      this.setState({ displayedGifts: filteredGifts });
    } else if (this.state.price === 5) {
      //if price is selected
      const filteredGifts = gifts.filter((gift) => {
        return gift.price > 10000 && gift.price <= 20000;
      });
      this.setState({ displayedGifts: filteredGifts });
    } else if (this.state.price === 6) {
      //if price is selected
      const filteredGifts = gifts.filter((gift) => {
        return gift.price > 20000;
      });
      this.setState({ displayedGifts: filteredGifts });
    }
    //price range end

    if (
      this.state.gender === 0 &&
      this.state.age === 0 &&
      this.state.interest === 0 &&
      this.state.price === 0
    ) {
      this.setState({ displayedGifts: this.state.allGifts });
    }
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
              value={this.state.gender}
              onChange={(e) => this.setGender(e)}
            >
              <option value={0}>Nothing Selected</option>
              <option value={1}>Male</option>
              <option value={2}>Female</option>
              <option value={3}>Gender Neutral</option>
            </select>
          </div>
          <div className="col-3">
            <select
              className="custom-select"
              id="age-dropdown"
              value={this.state.age}
              onChange={(e) => this.setAge(e)}
            >
              <option value={0}>Nothing Selected</option>
              <option value={1}>Under 12</option>
              <option value={2}>12-17</option>
              <option value={3}>18-24</option>
              <option value={4}>25-34</option>
              <option value={5}>35-44</option>
              <option value={6}>45-54</option>
              <option value={7}>55+</option>
              <option value={8}>All ages</option>
            </select>
          </div>
          {/* Allow multiple selects */}
          <div className="col-3">
            <select
              className="custom-select"
              id="interest-dropdown"
              value={this.state.interest}
              onChange={(e) => this.setInterest(e)}
            >
              <option value={0}>Nothing Selected</option>
              <option value={1}>Arts and Crafts</option>
              <option value={2}>Collectibles</option>
              <option value={3}>Electronics</option>
              <option value={4}>Jewelry</option>
              <option value={5}>Toys</option>
              <option value={6}>Sports & Recreation</option>
              <option value={7}>Outdoors</option>
              <option value={8}>Music</option>
              <option value={9}>Fashion</option>
              <option value={10}>Games</option>
              <option value={11}>Home Appliances</option>
            </select>
          </div>
          {/* Maybe add dragbar to adjust range */}
          <div className="col-3">
            <select
              className="custom-select"
              id="price-dropdown"
              value={this.state.price}
              onChange={(e) => this.setPrice(e)}
            >
              <option value={0}>Nothing Selected</option>
              <option
                value={1}
                // add ranges for prices
              >
                Under $25
              </option>
              <option value={2}>$25-$50</option>
              <option value={3}>$50-$75</option>
              <option value={4}>$75-$100</option>
              <option value={5}>$100-$200</option>
              <option value={6}>$200+</option>
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
          {/* map method use to iterate through gifts array returning the values shown below from our data */}
          {this.state.displayedGifts.map((gifts) => {
            return (
              <IndividualGift
                title={gifts.title}
                description={gifts.description}
                price={(gifts.price / 100).toFixed(2)}
                key={gifts.id}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}
export default connect(mapStateToProps)(HomePage);
