import React from "react";
import { Link, Outlet } from "react-router-dom";

function Home() {
  return (
    <div className="span-12x1">
      <h1 className="font-96 opacity-50 spacing-sm">Begone CSS</h1>
      <div className="display-f direction-c align-i-s">
      <Link
        to="/gettingstarted"
        className="btn bg-light-grey hover-white text-blue"
        >
        Getting started
      </Link>
      <Link
        to="/documentation"
        className="btn bg-light-grey text-blue hover-white mt-12"
        >
        Documentation
      </Link>
      </div>
    </div>
  );
}

export default Home;
  