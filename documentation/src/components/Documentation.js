import { gsap } from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Documentation = () => {
const [docState, setDocState] = useState(0);

let menu = useRef();
let outlet = useRef();

  return (
    <div className="grid-12 md-grid mt-60">
      <div className="span-3x1 side-nav" ref={menu}>
        <div className="display-f direction-c">
          <Link
            onClick={() => setDocState(0)}
            to="/documentation/buttons"
              className={`${docState === 0 ? 'active-outline-black bg-black c-white' : ' hover-outline-black'} btn border-white brd-lg text-black bg-hover-white `}
          >
            Buttons
          </Link>
          <Link
            onClick={() => setDocState(1)}
            to="/documentation/typography"
              className={`${docState === 1 ? 'active-outline-black bg-black c-white' : ' hover-outline-black'} btn border-white brd-lg text-black bg-hover-white `}
          >
            Typography
          </Link>
          <Link
            onClick={() => setDocState(2)}
            to="/documentation/tabs"
              className={`${docState === 2 ? 'active-outline-black bg-black c-white' : ' hover-outline-black'} btn border-white brd-lg text-black bg-hover-white `}
          >
            Tabs
          </Link>
          <Link
            onClick={() => setDocState(3)}
            to="/documentation/utilities"
              className={`${docState === 3 ? 'active-outline-black bg-black c-white' : ' hover-outline-black'} btn border-white brd-lg text-black bg-hover-white `}
          >
            Utility
          </Link>{" "}
          <Link
            onClick={() => setDocState(4)}
            to="/documentation/grid"
              className={`${docState === 4 ? 'active-outline-black bg-black c-white' : ' hover-outline-black'} btn border-white brd-lg text-black bg-hover-white `}
          >
            Grid
          </Link>
          <Link
            onClick={() => setDocState(5)}
            to="/documentation/layouts"
              className={`${docState === 5 ? 'active-outline-black bg-black c-white' : ' hover-outline-black'} btn border-white brd-lg text-black bg-hover-white `}
          >
            Layouts
          </Link>
          <Link
            onClick={() => setDocState(6)}
            to="/documentation/topnavigation"
              className={`${docState === 6 ? 'active-outline-black bg-black c-white' : ' hover-outline-black'} btn border-white brd-lg text-black bg-hover-white `}
          >
            Top Navigation
          </Link>
          <Link
            onClick={() => setDocState(7)}
            to="/documentation/cards"
              className={`${docState === 7 ? 'active-outline-black bg-black c-white' : ' hover-outline-black'} btn border-white brd-lg text-black bg-hover-white `}
          >
            Cards
          </Link>
        </div>
      </div>
      <div className="grid-start-4 span-9x1 side-nav-content grid-start-3" ref={outlet}>
        <Outlet />
      </div>
    </div>
  );
}

export default Documentation;
  