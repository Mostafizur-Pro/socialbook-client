import React from "react";
import Navbar from "../../Shared/Navber/Navbar";
import LeftSideHome from "../LeftSideHome/LeftSideHome";
import MiddleHome from "../MiddleHome/MiddleHome";
import RightSideHome from "../RightSideHome/RightSideHome";

const HomePage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="lg:grid lg:grid-cols-12 gap-4 mx-5 sm:none ">
        <div className="col-span-3  ">
          <LeftSideHome></LeftSideHome>
        </div>
        <div className="col-span-7">
          <MiddleHome></MiddleHome>
        </div>
        <div className="col-span-2  ">
          <RightSideHome></RightSideHome>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
