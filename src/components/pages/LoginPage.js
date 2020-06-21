import React from "react";
import Header from "../ui/Header";
import SignUp from "../ui/SignUp";
import LogIn from "../ui/LogIn";

export default function LoginPage() {
  return (
    // Make Title and Logo a component
    <div className="container">
      <div className="row my-5">
        <Header />
        {/* add logo */}
        <div className="col-6 offset-3 mb-3">
          <h5 className="text-center">Let's Find the Perfect Gift!</h5>
        </div>

        {/* new login card */}

        <div className="col-12 mt-5">
          <div className="">
            <div className="card-body">
              <div className="row">
                {/* TODO fix for mobile */}
                {/* Create Account component */}
                <SignUp />

                {/* Horizontal divider */}
                <div style={{ borderRight: "1px solid" }} />
                {/* LogIn component */}
                <LogIn />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
