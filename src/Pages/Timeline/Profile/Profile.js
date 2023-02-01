import React from "react";
import CenterPoint from "./CenterPoint";
import Leftside from "./Leftside";
import RightSide from "./RightSide";

const Profile = () => {
  return (
    <div className="max-w-screen-md mx-auto">
      {/* <Navbar></Navbar> */}
      <div className="lg:grid lg:grid-cols-12 gap-4 mx-5 sm:none ">
        <div className="col-span-3  ">
          {/* <LeftSideHome></LeftSideHome> */}
          <Leftside />
        </div>
        <div className="col-span-7">
          <CenterPoint />
        </div>
        <div className="col-span-2  ">
          <RightSide />
        </div>
      </div>
    </div>
  );
};

export default Profile;
