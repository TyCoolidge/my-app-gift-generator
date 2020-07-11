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
      filteredUserGifts: gifts,
      userSinceDate: [],
    };
  }
  componentDidMount() {
    axios
      .get("https://run.mocky.io/v3/624bafeb-1593-4c68-9f9b-5952d2111755")
      .then((res) => {
        const currentUser = res.data[0];
        console.log(currentUser);
        //TODO make render faster && make current user
        this.setState({
          userSinceDate: toDisplayDate(currentUser.createdAt, "MMM. d, y"),
        });
      })
      .catch((error) => {
        console.log(error);
      });
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
                {this.props.currentUser.userName}
              </div>
            </h2>
            {/* <h2 className="text-muted"></h2> */}
          </div>
        </div>
        <h2 className="mb-5">
          Member since: &nbsp;
          <div className="text-muted d-inline">{this.state.userSinceDate}</div>
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
            return gift.createdByUserId === this.props.currentUser.id;
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
