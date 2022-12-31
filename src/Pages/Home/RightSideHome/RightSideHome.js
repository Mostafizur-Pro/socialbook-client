import React from "react";

const RightSideHome = () => {
  return (
    <div>
      <h2 className="text-left text-2xl mb-5 text-gray-400">Who to Follow</h2>
      <section className="flex justify-items-start items-center my-3">
        <div className="avatar">
          <div className="w-16 rounded-full">
            <img src="https://placeimg.com/193/193/people" />
          </div>
        </div>
        <div className="text-left ml-3">
          <h1 className="text-blue-400">Brian Walton</h1>
          <h1 className="text-green-400">Add friend</h1>
        </div>
        <hr></hr>
      </section>
      <section className="flex justify-items-start items-center my-3">
        <div className="avatar">
          <div className="w-16 rounded-full">
            <img src="https://placeimg.com/192/192/people" />
          </div>
        </div>
        <div className="text-left ml-3">
          <h1 className="text-blue-400">Brian Walton</h1>
          <h1 className="text-green-400">Add friend</h1>
        </div>
        <hr></hr>
      </section>

      <section className="flex justify-items-start items-center my-3">
        <div className="avatar">
          <div className="w-16 rounded-full">
            <img src="https://placeimg.com/191/191/people" />
          </div>
        </div>
        <div className="text-left ml-3">
          <h1 className="text-blue-400">Brian Walton</h1>
          <h1 className="text-green-400">Add friend</h1>
        </div>
        <hr></hr>
      </section>
    </div>
  );
};

export default RightSideHome;
