import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="col-xl-6 offset-xl-3 col-8 offset-2">
      <Link to="/">
        <h2 className="text-center titleSize">Gift Generator</h2>
      </Link>
    </div>
  );
}
