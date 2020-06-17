import React from "react";
// import randomGift from "../../mock-data/random-gift-data"

export default function IndividualGift(props) {
  return (
    <div className="container mb-4">
      <div className="row">
        <div className="col-5 offset-1 col-sm-5 offset-sm-1 col-md-4 offset-md-2 col-lg-3 offset-lg-3 col-xl-3 offset-xl-3">
          {/* Placeholders for now, come back to add components */}
          <div className="containsImage fitToImageContainer">
            <div className="col-5">
              <img alt="item" />
            </div>
          </div>
        </div>
        <div className="mt-1 giftInfoSize">
          <p>Name: {props.title}</p>
          <p>Description: {props.desc}</p>
          <p>Price: {props.price}</p>
        </div>
      </div>
    </div>
  );
}
