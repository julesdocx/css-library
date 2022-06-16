import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./nav.css"

function Nav() {
//const [isActive, setTabState1] = useState(0);
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
      } navbar-fixed lg`}
    >
      <div className="grid-8 md-grid align-i-s tab-group">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "active span-2x1 font-bold p-4 text-white bg-black pt-18 navlink flex-g"
              : "font-bold span-2x1 p-4 text-black  pt-18 navlink"
          }
        >
          Begone CSS
        </NavLink>
        <NavLink
          to="/documentation"
          className={({ isActive }) =>
            isActive
              ? "active span-2x1 bg-black text-white flex-g pt-18 navlink font-bold p-4"
              : "font-bold span-2x1 p-4 text-black  pt-18 navlink"
          }
        >
          Components
        </NavLink>
        <NavLink
          to="/gettingstarted"
          className={({ isActive }) =>
            isActive
              ? "active span-2x1 bg-black text-white flex-g pt-18 navlink font-bold p-4"
              : "font-bold span-2x1 p-4 text-black  pt-18 navlink"
          }
        >
          Getting started
        </NavLink>
        <NavLink
          to="/templates"
          className={({ isActive }) =>
            isActive
              ? "active span-2x1 bg-black text-white flex-g pt-18 navlink font-bold p-4"
              : "font-bold span-2x1 p-4 text-black  pt-18 navlink"
          }
        >
          Templates
        </NavLink>
      </div>
    </nav>
  );
}

export default Nav;

        // <div className="dropdown_menu dropdown_menu-6">
        //     <div>
        //       <NavLink
        //         onClick={() => setisActive(2)}
        //         to="/documentation/typography"
        //         className="btn-outlined-black text-black hover-rounded"
        //       >
        //         Typography
        //       </NavLink>
        //     </div>
        //     <div>
        //       <NavLink
        //         onClick={() => setisActive(2)}
        //         to="/documentation/buttons"
        //         className="btn-outlined-black text-black hover-rounded"
        //       >
        //         Buttons
        //       </NavLink>
        //     </div>
        //   </div>
        // </div>