import React from "react";
import { Link } from "react-router-dom";
// import randomGifts from "../../mock-data/random-gifts";
// import users from "../../mock-data/users";

export default class UserGifts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="mb-3 row">
          <div className="col-4 col-sm-4 col-md-3">
            {/* TODO add linebreaks */}
            <div className="containsImage fitToImageContainer">
              <div className="">
                <img alt="item" url={this.props.img} />
              </div>
            </div>
          </div>
          {/* fix format of text below */}
          <div className="col-6 mt-2 giftInfoSize">
            <div className="mb-2">
              <strong>Name:</strong> {this.props.title}
              <br />
            </div>
            <div className="mb-2">
              <strong>Description:</strong> {this.props.description}
              <br />
            </div>
            <div className="mb-2">
              <strong>Price: </strong>${this.props.price}
            </div>
          </div>
          <div className="col float-right">
            {/* when user clicks on edit, the addgiftpage should be prefilled with "clicked" gifts data */}
            <Link
              to="/add-gift-page"
              className="float-right btn-sm btn-primary"
            >
              Edit
            </Link>
          </div>
        </div>

        <hr />
      </div>
    );
  }
}
