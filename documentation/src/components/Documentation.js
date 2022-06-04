import { gsap } from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Documentation = () => {
const [docState, setDocState] = useState(0);

let menu = useRef(null);
let outlet = useRef(null);

useEffect(() => {
  gsap.to(
    menu,
    0.5,
    {
      delay: 0.4,
      opacity: 0,
      ease: "power3.out",
      x: -100,
    },
  );
})

  return (
    <div className="grid-10 md-grid mt-60">
      <div className="span-2x1 side-nav" ref={menu}>
        <div className="display-f direction-c">
          <Link
            onClick={() => setDocState(0)}
            to="/documentation/buttons"
              className={`${docState === 0 ? 'active-outline-blue' : ''} hover-outline-blue btn hover-blur border-white brd-lg text-blue bg-hover-white mb-4`}
          >
            Buttons
          </Link>
          <Link
            onClick={() => setDocState(1)}
            to="/documentation/typography"
              className={`${docState === 1 ? 'active-outline-blue' : ''} hover-outline-blue btn hover-blur border-white brd-lg text-blue bg-hover-white mb-4`}
          >
            Typography
          </Link>
          <Link
            onClick={() => setDocState(2)}
            to="/documentation/tabs"
              className={`${docState === 2 ? 'active-outline-blue' : ''} hover-outline-blue btn hover-blur border-white brd-lg text-blue bg-hover-white mb-4`}
          >
            Tabs
          </Link>
          <Link
            onClick={() => setDocState(3)}
            to="/documentation/utilities"
              className={`${docState === 3 ? 'active-outline-blue' : ''} hover-outline-blue btn hover-blur border-white brd-lg text-blue bg-hover-white mb-4`}
          >
            Utility
          </Link>{" "}
          <Link
            onClick={() => setDocState(4)}
            to="/documentation/grid"
              className={`${docState === 4 ? 'active-outline-blue' : ''} hover-outline-blue btn hover-blur border-white brd-lg text-blue bg-hover-white mb-4`}
          >
            Grid
          </Link>
          <Link
            onClick={() => setDocState(5)}
            to="/documentation/layouts"
              className={`${docState === 5 ? 'active-outline-blue' : ''} hover-outline-blue btn hover-blur border-white brd-lg text-blue bg-hover-white mb-4`}
          >
            Layouts
          </Link>
          <Link
            onClick={() => setDocState(6)}
            to="/documentation/topnavigation"
              className={`${docState === 6 ? 'active-outline-blue' : ''} hover-outline-blue btn hover-blur border-white brd-lg text-blue bg-hover-white mb-4`}
          >
            Top Navigation
          </Link>
          <Link
            onClick={() => setDocState(7)}
            to="/documentation/cards"
              className={`${docState === 7 ? 'active-outline-blue' : ''} hover-outline-blue btn hover-blur border-white brd-lg text-blue bg-hover-white mb-4`}
          >
            Cards
          </Link>
        </div>
      </div>
      <div className="span-8x1 side-nav-content grid-start-3" ref={outlet}>
        <Outlet />
      </div>
    </div>
  );
}

export default Documentation;
  