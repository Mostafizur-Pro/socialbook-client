import React from "react";
import {
  FaComments,
  FaImages,
  FaMinusCircle,
  FaUsers,
  FaVideo,
} from "react-icons/fa";

const LeftSideHome = () => {
  return (
    <div>
      <section className="flex justify-start items-center gap-2">
        <div className="my-3  text-green-400">
          <FaMinusCircle />
        </div>
        <div className="my-2 w-full text-left">
          My Newsfeed
          <hr className="mt-2"></hr>
        </div>
      </section>
      <section className="flex justify-start items-center gap-2">
        <div className="my-3  text-green-400">
          <FaMinusCircle />
        </div>
        <div className="my-2 w-full text-left">
          People Nearby
          <hr className="mt-2"></hr>
        </div>
      </section>
      <section className="flex justify-start items-center gap-2">
        <div className="my-3  text-amber-400">
          <FaUsers />
        </div>
        <div className="my-2 w-full text-left">
          Friends
          <hr className="mt-2"></hr>
        </div>
      </section>
      <section className="flex justify-start items-center gap-2">
        <div className="my-3  text-emerald-400-400">
          <FaComments />
        </div>
        <div className="my-2 w-full text-left">
          Messages
          <hr className="mt-2"></hr>
        </div>
      </section>
      <section className="flex justify-start items-center gap-2">
        <div className="my-3  text-blue-400">
          <FaImages />
        </div>
        <div className="my-2 w-full text-left">
          Images
          <hr className="mt-2"></hr>
        </div>
      </section>
      <section className="flex justify-start items-center gap-2">
        <div className="my-3  text-red-400">
          <FaVideo />
        </div>
        <div className="my-2 w-full text-left">
          Videos
          <hr className="mt-2"></hr>
        </div>
      </section>
    </div>
  );
};

export default LeftSideHome;
