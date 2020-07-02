import React from "react";
import { Link } from "react-router-dom";
// import randomGift from "../../mock-data/random-gift-data"

export default function UserGifts(props) {
  return (
    <div>
      <div className="mb-3 row">
        <div className="col-4 col-sm-4 col-md-3">
          {/* TODO add linebreaks */}
          <div className="containsImage fitToImageContainer">
            <div className="">
              <img alt="item" url={props.img} />
            </div>
          </div>
        </div>
        {/* fix format of text below */}
        <div className="col-6 mt-3 giftInfoSize">
          <div className="mb-2">
            <strong>Name:</strong> {props.title}
            <br />
          </div>
          <div className="mb-2">
            <strong>Description:</strong> {props.desc}
            <br />
          </div>
          <div className="mb-2">
            <strong>Price: </strong>${props.price}
          </div>
        </div>
        <div className="col float-right">
          {/* when user clicks on edit, the addgiftpage should be prefilled with "clicked" gifts data */}
          <Link
            to="/add-gift-page"
            className="float-right btn-sm btn-primary mt-5"
          >
            Edit
          </Link>
        </div>
      </div>
      <hr />
    </div>
  );
}
