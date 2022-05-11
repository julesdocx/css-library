import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar-fixed-blur">
      <div className="container">
        <h2 className="site-title font-bold spacing-s opacity-50">Demo Styles</h2>
        <div className="menu-right">
          <Link to=""
            className="btn-outlined-black hover-rounded text-hover-white mr-1"
            href=""
          >
            Getting started
          </Link>
          <Link to=""
            className="btn-outlined-black hover-rounded btn-active-outlined-black text-hover-white"
            href=""
          >
            Components
          </Link>
          <div className="menu-options">
            <div>
              <Link to=""
                className="btn-outlined-blue text-blue text-hover-white  hover-rounded"
                href=""
              >
                Layout system
              </Link>
            </div>
            <div>
              <Link to=""
                className="btn-outlined-blue text-blue text-hover-white  hover-rounded"
                href=""
              >
                Grid system
              </Link>
            </div>
            <div>
              <Link to=""
                className="btn-outlined-blue text-blue text-hover-white  hover-rounded"
                href=""
              >
                Typography
              </Link>
            </div>
            <div>
              <Link to=""
                className="btn-outlined-blue text-blue text-hover-white  hover-rounded"
                href=""
              >
                Top navigation
              </Link>
            </div>
            <div>
              <Link to=""
                className="btn-outlined-blue text-blue text-hover-white  hover-rounded"
                href=""
              >
                Side navigation
              </Link>
            </div>
            <div>
              <Link to="/buttons"
                className="btn-outlined-blue text-blue text-hover-white  hover-rounded"
                href=""
              >
                Buttons
              </Link>
            </div>
            <div>
              <Link to=""
                className="btn-outlined-blue text-blue text-hover-white  hover-rounded"
                href=""
              >
                Menu
              </Link>
            </div>
            <div>
              <Link to=""
                className="btn-outlined-blue text-blue text-hover-white  hover-rounded"
                href=""
              >
                List
              </Link>
            </div>
            <div>
              <Link to=""
                className="btn-outlined-blue text-blue text-hover-white  hover-rounded"
                href=""
              >
                Card
              </Link>
            </div>
            <div>
              <Link to=""
                className="btn-outlined-blue text-blue text-hover-white  hover-rounded"
                href=""
              >
                Accordion
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
