import React from "react";
// import randomGift from "../../mock-data/random-gift-data"

export default function IndividualGift(props) {
  return (
    <div>
      <div className="row">
        <div className="col-4 col-sm-4 col-md-3">
          {/* TODO add linebreaks */}
          <div>
            <a href={props.gift.url}>
              <img
                alt="item"
                className="containsImage fitToImageContainer"
                src={props.gift.photo}
              />
            </a>
          </div>
        </div>
        {/* fix format of text below */}
        <div className="giftInfoSize">
          <div className="mb-2">
            {props.gift.title}
            <br />
          </div>
          <div className="mb-2">
            {/* if too long truncate */}

            <div className="d-inline" style={{ fontSize: "16px" }}>
              {" "}
              {props.gift.description} &nbsp;
              <a href={props.gift.url}>More info</a>
            </div>
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
