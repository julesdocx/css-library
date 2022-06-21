import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";
import { Link, Outlet } from "react-router-dom";
import "./home.css"
const Home = () => {

const title = useRef();
const lazy = useRef();
const description = useRef();

    useEffect(() => {
    gsap.to(title.current, {
      delay: 0.2,
      opacity: "100",
      ease: "poawer2.out",
      duration: 1,
      x: -100,
    });
     gsap.to(lazy.current, {
       delay: 0.8,
       opacity: "100",
       ease: "poawer2.out",
       duration: 1,
       x: 270,
     });
      gsap.to(description.current, {
        delay: 1,
        opacity: "100",
        ease: "poawer2.out",
        duration: 1,
        x: -100,
      });
  });


  return (
    <div>
      <div className=" direction-c align-i-c md-grid grid-12">
        <h1 className="headline span-12x1 text-white mt-60 p-4 pt-36 pb-36 font-bold font-96 bg-black">
          <span>CSS library</span> with a focus on helping people with the{" "}
          <span>first steps</span> of web-developent
        </h1>
        <h1 className="headline span-12x1 text-white mt-18 p-4 pt-36 pb-36 font-bold font-96 bg-black">
          In case you've never made a website, go to:{" "}
          <Link
            className="c-green font-medium hover-underline"
            to="/gettingstarted"
          >
            Getting started
          </Link>
        </h1>
        <h1 className="headline span-12x1 text-white mt-18 p-4 pt-36 pb-36 font-bold font-96 bg-black">
          In case you are just here to try out the library use the import link
          and go to:{" "}
          <Link
            className="c-blue font-medium hover-underline"
            to="/documentation"
          >
            Components
          </Link>
        </h1>
        <h1 className="headline span-12x1 text-white mt-18 mb-18 p-4 pt-36 pb-36 font-bold font-96 bg-black">
          If you would like to see this project grow{" "}
          <a
            className="c-red font-medium hover-underline"
            href="https://www.instagram.com/walktype/"
          >
            buy a poster
          </a>
        </h1>
        <p className="span-12x1">
          👨‍💻 with ❤️ by{" "}
          <a className="c-blue hover-underline" href="http://julesdocx.be">
            Jules Docx
          </a>
        </p>
      </div>
    </div>
  );
}

export default Home;
  