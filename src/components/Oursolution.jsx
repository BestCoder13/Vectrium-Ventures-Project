import React, { useState, useEffect, useRef } from "react";
import solution from "../assets/solutions-min.png";

const Oursolution = () => {
  const [animate, setAnimate] = useState(false);
  const solutionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        }
      },
      { threshold: 0.5 }
    );

    if (solutionRef.current) {
      observer.observe(solutionRef.current);
    }

    return () => {
      if (solutionRef.current) {
        observer.unobserve(solutionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={solutionRef}
      className="text-white flex flex-col md:flex-row items-center gap-6 p-6 md:p-8 rounded-2xl shadow-lg w-full max-w-6xl mx-auto"
    >
      <style>
        {`
          @keyframes enlargeOnLoad {
            0% {
              transform: scale(1);
            }
            100% {
              transform: scale(1.1);
            }
          }
        `}
      </style>

      <div
        className={`left w-full md:w-1/2 flex justify-center transition-all duration-500 ease-in-out`}
      >
        <img
          src={solution}
          className="rounded-xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg transform transition-transform duration-500 hover:scale-105"
          style={{
            animation: animate ? "enlargeOnLoad 0.8s ease-out forwards 0.5s" : "none",
          }}
          alt="Our Solution"
        />
      </div>

      <div className="right w-full md:w-1/2 text-center md:text-left px-4 md:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-400">Our Solutions</h1>
        <p className="w-full sm:w-[90%] md:w-[80%] text-base sm:text-lg mt-4 leading-relaxed text-gray-300">
          Vectrium Ventures is a leading IT solution service provider based in
          Indore. Our company specializes in a range of services including
          website development, graphic designing, UI/UX web designing, brand
          building, social media handling, business consultation, SEO and
          content writing, and digital marketing.
        </p>
        <button className="mt-6 px-5 py-2 sm:px-6 sm:py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full transition-all duration-300 shadow-md">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Oursolution;