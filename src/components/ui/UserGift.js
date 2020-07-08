import React from "react";
import { Link } from "react-router-dom";
// import randomGifts from "../../mock-data/random-gifts";
// import users from "../../mock-data/users";
import { connect } from "react-redux";
import actions from "../../store/actions";
import { withRouter } from "react-router-dom";

class UserGift extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  storeEditableGift() {
    console.log("STORE_EDITABLE_GIFT");
    this.props.dispatch({
      type: actions.STORE_EDITABLE_GIFT,
      payload: this.props.gift,
    });

    this.props.history.push("/add-gift-page");
  }
  render() {
    return (
      <div>
        <div className="mb-3 row">
          <div className="col-4 col-sm-4 col-md-3">
            {/* TODO add linebreaks */}
            <div className="containsImage fitToImageContainer">
              <div className="">
                <img alt="item" url={this.props.gift.url} />
              </div>
            </div>
          </div>
          {/* fix format of text below */}
          <div className="col-6 mt-2 giftInfoSize">
            <div className="mb-2">
              <strong>Name:</strong> {this.props.gift.title}
              <br />
            </div>
            <div className="mb-2">
              <strong>Description:</strong> {this.props.gift.description}
              <br />
            </div>
            <div className="mb-2">
              <strong>Price: </strong>$
              {(this.props.gift.price / 100).toFixed(2)}
            </div>
          </div>
          <div className="col float-right">
            {/* when user clicks on edit, the addgiftpage should be prefilled with "clicked" gifts data */}
            <Link
              to="/add-gift-page"
              className="float-right btn-sm btn-primary"
              onClick={() => {
                this.storeEditableGift();
              }}
            >
              {/* needs on click that saves its data */}
              Edit
            </Link>
          </div>
        </div>

        <hr />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    editableGift: state.editableGift,
  };
}
export default withRouter(connect(mapStateToProps)(UserGift));
