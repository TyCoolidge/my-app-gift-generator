import React from "react";
// import randomGift from "../../mock-data/random-gift-data"

export default function IndividualGift(props) {
  return (
    <div>
      <div className="mb-3 row">
        <div className="col-4 col-sm-4 col-md-3">
          {/* TODO add linebreaks */}
          <div className="containsImage fitToImageContainer">
            <div className="">
              <img alt="item" />
            </div>
          </div>
        </div>
        {/* fix format of text below */}
        <div className="mt-3 giftInfoSize">
          <div className="mb-2">
            Name: {props.title}
            <br />
          </div>
          <div className="mb-2">
            Description: {props.desc}
            <br />
          </div>
          <div className="mb-2">Price: {props.price}</div>
        </div>
      </div>
      <hr />
    </div>
  );
}
