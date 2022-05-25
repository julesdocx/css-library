import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Nav() {
const [tabState1, setTabState1] = useState(0);
const navigate = useNavigate();

 const [isShrunk, setShrunk] = useState(false);

 useEffect(() => {
   const handler = () => {
     setShrunk((isShrunk) => {
       if (
         !isShrunk &&
         (document.body.scrollTop > 20 ||
           document.documentElement.scrollTop > 20)
       ) {
         return true;
       }

       if (
         isShrunk &&
         document.body.scrollTop < 4 &&
         document.documentElement.scrollTop < 4
       ) {
         return false;
       }

       return isShrunk;
     });
   };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
 }, []);

  return (
    <nav
      className={`${
        isShrunk ? "shrunkNav" : "main-nav"
      } navbar-fixed bg-white lg`}
    >
      <div className="grid-10 lg-grid align-i-s tab-group">
        <Link
          onClick={() => setTabState1(0)}
          to="/"
          className={`tab-item ${
            tabState1 === 0
              ? "span-6x1 font-bold active-tab flex-g"
              : "span-2x1"
          } hover-underline`}
        >
          Begone CSS
        </Link>
        <div
          onClick={() => {
            setTabState1(2);
            navigate("/documentation");
          }}
          className={`tab-item ${
            tabState1 === 2
              ? "span-6x1 active-tab font-bold flex-g"
              : "span-2x1"
          } hover-underline dropdown`}
        >
          <Link
            onClick={() => setTabState1(2)}
            to="/documentation"
            className="dropdown_button hover-underline"
          >
            Documentation
          </Link>
          <div className="dropdown_menu dropdown_menu-6">
            <div>
              <Link
                onClick={() => setTabState1(2)}
                to="/documentation/typography"
                className="btn-outlined-black text-black hover-rounded"
              >
                Typography
              </Link>
            </div>
            <div>
              <Link
                onClick={() => setTabState1(2)}
                to="/documentation/buttons"
                className="btn-outlined-black text-black hover-rounded"
              >
                Buttons
              </Link>
            </div>
          </div>
        </div>
        <Link
          onClick={() => setTabState1(1)}
          to="/gettingstarted"
          className={`tab-item ${
            tabState1 === 1
              ? "span-6x1 font-bold active-tab flex-g"
              : "span-2x1"
          } hover-underline`}
        >
          Getting started
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
