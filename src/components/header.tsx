import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-primary p-2">
      <h2>
        <Link to="/restaurants">
          <span className="text-white">Igniotron</span>
        </Link>
      </h2>
    </header>
  );
};

export default Header;
