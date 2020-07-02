/*Username up top  logout on top left

Your gifts
list of gifts similar to homepage, each gift linked to username
edit buttons next to each gift
edit button takes to to add gift page but parameters are already filled out
saving edited gift reflects on userpage and homepage
*/
import React from "react";
import { Link } from "react-router-dom";
import randomGifts from "../../mock-data/random-gifts";
import UserGifts from "../ui/UserGifts";
import users from "../../mock-data/users";

export default function AccountPage() {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col">
          <Link to="/login-page" className="float-right">
            Log Out
          </Link>
        </div>
      </div>
      <div className="row my-4">
        <div className="col-6">
          <h2 className="">Your Created Gifts</h2>
        </div>
        <div className="col-6">
          <Link to="/login-page" className="float-right btn-sm btn-primary">
            Create New Gift
          </Link>
        </div>
      </div>
      <div className="mb-3">Welcome back:{users.userName}</div>
      {randomGifts.map((gifts) => {
        return (
          <>
            <UserGifts
              title={gifts.title}
              desc={gifts.desc}
              price={gifts.price}
              key={gifts.id}
            />
          </>
        );
      })}
    </div>
  );
}
