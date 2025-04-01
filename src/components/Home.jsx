import React from "react";
import TrustedBrands from "./TrustedBrands";
import bg from "../assets/bg.avif";
import Oursolution from "./Oursolution";
import CallNow from "./CallNow";

const Home = () => {
  const handleRedirect = () => {
    window.location.href = "https://api.whatsapp.com/send?phone=918815631154";
  };

  const animationStyle = {
    animation: "slideFromTop 1s ease-out forwards",
    opacity: 0, 
  };

  return (
    <div className="big_container">
      <style>
        {`
          @keyframes slideFromTop {
            0% {
              opacity: 0;
              transform: translateY(-50px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>

      <div
        className="w-full min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="flex flex-col pl-45 pt-60 justify-left h-full bg-black/50 min-h-screen text-white p-6">
=
          <h1 className="text-5xl font-bold w-[35vw] text-left" style={animationStyle}>
            Empowering Your{" "}
            <span className="text-blue-400">
              Digital Journey <br />
            </span>
            with Innovative IT Solutions
          </h1>

          <p className="mt-4 text-lg w-[35vw] text-left" style={animationStyle}>
            Vectrium Ventures delivers tailored IT solutions that elevate your brand and streamline your digital
            operations. <br />
            Our expert team specializes in driving innovation <br />
            across design, development, and marketing.
          </p>

          <div className="nav-right mt-6">
            <button
              onClick={handleRedirect}
              className="relative bg-black text-white font-bold py-2 px-4 rounded cursor-pointer transition-all hover:bg-gray-500 hover:scale-110 hover:text-white"
              style={animationStyle}
            >
              Call Now →
            </button>
          </div>
        </div>
      </div>

      <TrustedBrands />
      <Oursolution />
      <CallNow />
    </div>
  );
};

export default Home;
