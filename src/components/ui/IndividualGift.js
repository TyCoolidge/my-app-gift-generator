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
              <img alt="item" url={props.gift.photo} />
            </div>
          </div>
        </div>
        {/* fix format of text below */}
        <div className="mt-3 giftInfoSize">
          <div className="mb-2">
            Name: {props.gift.title}
            <br />
          </div>
          <div className="mb-2">
            Description: {props.gift.description}
            <br />
          </div>
          <div className="mb-2">
            Price: ${(props.gift.price / 100).toFixed(2)}
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
