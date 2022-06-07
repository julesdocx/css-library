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
      <div className="mt-60 direction-c align-i-c align-c md-grid grid-12">
        <div className="span-5x1">
          <img
            className="lazy-img"
            ref={lazy}
            src="./lazy_woman.jpg"
            alt="lazy baby"
          />
        </div>
        <div className="mt-60 pt-60 span-12x1">
          <img
            src="./Asset 3.svg"
            alt="handmade"
            ref={title}
            className="opacity-100 mt-60 title-img"
          />
        </div>
        <div ref={description} className="description mt-12 span-5x1 grid-start-6 align-l text-grey">
          <p>
              CSS library with a focus on helping people with the first steps of
              web-developent
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
  