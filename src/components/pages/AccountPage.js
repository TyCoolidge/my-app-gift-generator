/*Username up top  logout on top left
Your gifts
list of gifts similar to homepage, each gift linked to username
edit buttons next to each gift
edit button takes to to add gift page but parameters are already filled out
saving edited gift reflects on userpage and homepage
*/
import React from "react";
import { Link } from "react-router-dom";
import UserGift from "../ui/UserGift";
import users from "../../mock-data/users";
import gifts from "../../mock-data/gifts";
import toDisplayDate from "date-fns/format";
import Header from "../ui/Header";
import { connect } from "react-redux";
import actions from "../../store/actions";
import axios from "axios";

class AccountPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUserName: users[0], //need to change to current user, can do with redux
      filteredUserGifts: gifts,
    };
    console.log(this.state.currentUserName.id, this.state.filteredUserGifts);
  }

  logOutCurrentUser() {
    this.props.dispatch({
      type: actions.UPDATE_CURRENT_USER,
      payload: {},
    });
  }
  render() {
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-12">
            <Link
              to="/login-page"
              className="float-right"
              onClick={() => {
                this.logOutCurrentUser();
              }}
            >
              Log Out
            </Link>
          </div>
        </div>
        <Header />
        <div className="row mt-4">
          <div className="col-12">
            <h3 className="">My Account</h3>
            {/* <h2 className="text-muted"></h2> */}
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12">
            <h2 className="">
              Welcome Back: &nbsp;
              <div className="text-muted d-inline">
                {/* d-inline keeps text together inline  */}
                {this.state.currentUserName.userName}
              </div>
            </h2>
            {/* <h2 className="text-muted"></h2> */}
          </div>
        </div>
        <h2 className="mb-5">
          Member since:{" "}
          <div className="text-muted d-inline">
            {toDisplayDate(this.state.currentUserName.createdAt, "MMM. d, y")}
          </div>
        </h2>
        <div className="row mb-5">
          <div className="col">
            <h2 className="">Your created gifts</h2>
          </div>
          <div className="col">
            <div className="float-right">
              <Link
                to="/add-gift-page"
                className="float-right btn-sm btn-primary"
              >
                Create New Gift
              </Link>
            </div>
          </div>
        </div>
        {gifts
          .filter((gift) => {
            //filter comes first "higher order"
            return gift.createdByUserId === this.state.currentUserName.id;
          })
          .map((gift) => {
            return <UserGift gift={gift} key={gift.id} />;
          })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
  };
}
export default connect(mapStateToProps)(AccountPage);
