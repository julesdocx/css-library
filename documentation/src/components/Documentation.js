import React from "react";
import { Link, Outlet } from "react-router-dom";

function Documentation() {
  return (
    <div className="grid-10 md-grid mt-60">
      <div className="span-2x1 side-nav">
        <div className="display-f direction-c">
          <Link
            to="/documentation/buttons"
            className="btn hover-blur hover-underline text-blue bg-hover-white"
          >
            Buttons
          </Link>
          <Link
            to="/documentation/typography"
            className="btn hover-blur hover-underline text-blue bg-hover-white"
          >
            Typography
          </Link>
          <Link
            to="/documentation/tabs"
            className="btn hover-blur hover-underline text-blue bg-hover-white"
          >
            Tabs
          </Link>
          <Link
            to="/documentation/utilities"
            className="btn hover-blur hover-underline text-blue bg-hover-white"
          >
            Utility
          </Link>{" "}
          <Link
            to="/documentation/grid"
            className="btn hover-blur hover-underline text-blue bg-hover-white"
          >
            Grid
          </Link>
          <Link
            to="/documentation/layouts"
            className="btn hover-blur hover-underline text-blue bg-hover-white"
          >
            Layouts
          </Link>
          <Link
            to="/documentation/topnavigation"
            className="btn hover-blur hover-underline text-blue bg-hover-white"
          >
            Top Navigation
          </Link>
          <Link
            to="/documentation/cards"
            className="btn hover-blur hover-underline text-blue bg-hover-white"
          >
            Cards
          </Link>
        </div>
      </div>
      <div className="span-8x1 side-nav-content grid-start-3">
        <Outlet />
      </div>
    </div>
  );
}

export default Documentation;
  