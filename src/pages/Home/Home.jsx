import React from "react";
import { Grainy } from "../../styles/Grainy";
import logo from "../../assets/Studio.png";

const Home = () => {
  return (
    <div
      data-testid="home"
      className="flex flex-col h-screen bg-gradient-to-bl from-purple-400 via-pink-400 to-orange-500"
    >
      <div className="flex justify-center pt-20 ">
        {/* <div className="bg-white rounded-xl drop-shadow-lg border border-gray-300 p-2"> */}
        <img className="w-80" alt="logo" src={logo} />
        {/* </div> */}
      </div>
    </div>
  );
};

export default Home;
