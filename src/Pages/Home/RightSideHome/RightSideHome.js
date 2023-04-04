import React from "react";

const RightSideHome = () => {
  return (
    <div>
      <h2 className="text-left text-2xl mb-5 text-gray-400">Who to Follow</h2>
      <section className="flex justify-items-start items-center my-3">
        <div className="avatar">
          <div className="w-16 rounded-full">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/My-Passport-Size%28Small-Beard%29-1MB.jpg/800px-My-Passport-Size%28Small-Beard%29-1MB.jpg" />
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
            <img src="https://img.freepik.com/free-photo/close-up-photo-amicable-man-black-shirt-posing-his-passport-picture_132075-8192.jpg" />
          </div>
        </div>
        <div className="text-left ml-3">
          <h1 className="text-blue-400">Cris Haris </h1>
          <h1 className="text-green-400">Add friend</h1>
        </div>
        <hr></hr>
      </section>

      <section className="flex justify-items-start items-center my-3">
        <div className="avatar">
          <div className="w-16 rounded-full">
            <img src="https://i.pinimg.com/originals/31/af/88/31af882efb16e3f8f589ccf0afa2354a.jpg" />
          </div>
        </div>
        <div className="text-left ml-3">
          <h1 className="text-blue-400">Diana Amber</h1>
          <h1 className="text-green-400">Add friend</h1>
        </div>
        <hr></hr>
      </section>
    </div>
  );
};

export default RightSideHome;
