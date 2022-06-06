import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

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
      } navbar-fixed bg-white lg`}
    >
      <div className="grid-10 lg-grid align-i-s tab-group">
        <NavLink
          to="/"
          className={({ isActive }) =>
            (isActive
              ? "active span-6x1 font-bold active-tab flex-g"
              : "span-2x1")
          }
        >
          Begone CSS
        </NavLink>
        <NavLink
          to="/documentation"
          className={({ isActive }) =>
            (isActive
              ? " span-6x1 font-bold active-tab flex-g"
              : "span-2x1")
          }
        >
          Documentation
        </NavLink>
        <NavLink
          to="/gettingstarted"
          className={({ isActive }) =>
            (isActive
              ? "span-6x1 font-bold active-tab flex-g"
              : "span-2x1")
          }
        >
          Getting started
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