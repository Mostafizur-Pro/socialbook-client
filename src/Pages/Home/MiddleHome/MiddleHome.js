import React from "react";
import { FaFileExport } from "react-icons/fa";
import "./MiddleHome.css";

const MiddleHome = () => {
  return (
    <div>
      <section className="flex gap-5  justify-center items-center ">
        <div className="avatar">
          <div className="w-20 rounded-full">
            <img src="https://placeimg.com/193/193/people" />
          </div>
        </div>
        {/* Text Area */}
        {/* The button to open modal */}
        <label htmlFor="my-modal-3" className="btn w-3/6 text-left capitalize">
          Write what you wish
        </label>

        {/* Publish */}
        {/* <button className="btn rounded-full  text-white btn-info">
          Publish
        </button> */}
      </section>

      {/* Modal */}
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-2xl font-bold">Create Post</h3>
          <hr className="my-5"></hr>
          <section className="flex justify-start text-left gap-5">
            <div className="avatar">
              <div className="w-16 rounded-full">
                <img src="https://placeimg.com/193/193/people" />
              </div>
            </div>
            <div>
              <h1 className="text-xl font-semibold">Mostafizur rahman</h1>
              <select>
                <option>Public</option>
                <option>Friend</option>
                <option>Private</option>
              </select>
            </div>
          </section>
          <div>
            <textarea
              className="textarea textarea-bordered w-full h-32 my-5"
              placeholder="Write what you wish"
            ></textarea>
          </div>{" "}
          <section className="border border-gray-400 rounded-xl mb-5 p-5 text-left flex justify-between">
            <div class="">Add Image </div>
            <div className="tooltip" data-tip="Image">
              {/* <span
                  htmlFor="my-modal-2"
                  className="btn w-3/6  text-3xl btn btn-ghost text-green-500"
                >
                  <FaFileExport />
                </span> */}
              <label
                htmlFor="my-modal-6"
                className="text-3xl btn btn-ghost text-green-500"
              >
                <FaFileExport />
              </label>
            </div>
          </section>
          <button className="btn rounded-xl w-full capitalize  text-white text-xl">
            Post
          </button>
        </div>
      </div>

      {/* Modal */}
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-5">Select Your Image</h3>
          <input
            type="file"
            className="file-input file-input-bordered w-full max-w-xs"
          />
          <div className="modal-action">
            <label htmlFor="my-modal-6" className="btn">
              Update
            </label>
          </div>
        </div>
      </div>

      <section className="mt-10 rounded-xl bg-gray-200">
        <div className="card  ">
          <figure className="">
            <img
              className="w-full"
              src="https://placeimg.com/400/225/arch"
              alt="Shoes"
            />
          </figure>
          <div className="flex gap-5 justify-start items-center m-3">
            <div className="avatar ">
              <div className="w-20 rounded-full ">
                <img src="https://placeimg.com/193/193/people" />
              </div>
            </div>
            <div className="">
              <h1 className="text-blue-400 text-2xl font-semibold">
                Mostafizur Rahman
              </h1>
              <p className="text-sm">Published a photo about 3 mins ago</p>
            </div>
          </div>

          <div className="ml-28 mb-5">
            <p className=" border-y border-gray-400 py-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="flex gap-5 justify-start items-center mt-3">
              <div className="avatar ">
                <div className="w-12 rounded-full ">
                  <img src="https://placeimg.com/193/193/people" />
                </div>
              </div>
              <div className="">
                <h1 className="text-blue-400 text-base font-semibold">
                  Mostafizur Rahman
                </h1>
                <p className="text-sm mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud
                </p>
              </div>
            </div>
            <div className="flex gap-5 justify-start items-center mt-3">
              <div className="avatar ">
                <div className="w-12 rounded-full ">
                  <img src="https://placeimg.com/193/193/people" />
                </div>
              </div>
              <div className="">
                <h1 className="text-blue-400 text-base font-semibold">
                  Mostafizur Rahman
                </h1>
                <p className="text-sm mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud
                </p>
              </div>
            </div>
            <div className="flex gap-5 justify-start items-center mt-3">
              <div className="avatar ">
                <div className="w-12 rounded-full ">
                  <img src="https://placeimg.com/191/191/people" />
                </div>
              </div>
              <div className="w-full mr-5">
                <input
                  type="text"
                  placeholder="Post a comment"
                  className="input input-bordered w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-10 rounded-xl bg-gray-200 mb-10">
        <div className="card  ">
          <figure className="">
            <img
              className="w-full"
              src="https://placeimg.com/400/226/arch"
              alt="Shoes"
            />
          </figure>
          <div className="flex gap-5 justify-start items-center m-3">
            <div className="avatar ">
              <div className="w-20 rounded-full ">
                <img src="https://placeimg.com/193/193/people" />
              </div>
            </div>
            <div className="">
              <h1 className="text-blue-400 text-2xl font-semibold">
                Mostafizur Rahman
              </h1>
              <p className="text-sm">Published a photo about 4 mins ago</p>
            </div>
          </div>

          <div className="ml-28 mb-5">
            <p className=" border-y border-gray-400 py-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="flex gap-5 justify-start items-center mt-3">
              <div className="avatar ">
                <div className="w-12 rounded-full ">
                  <img src="https://placeimg.com/193/193/people" />
                </div>
              </div>
              <div className="">
                <h1 className="text-blue-400 text-base font-semibold">
                  Mostafizur Rahman
                </h1>
                <p className="text-sm mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud
                </p>
              </div>
            </div>
            <div className="flex gap-5 justify-start items-center mt-3">
              <div className="avatar ">
                <div className="w-12 rounded-full ">
                  <img src="https://placeimg.com/193/193/people" />
                </div>
              </div>
              <div className="">
                <h1 className="text-blue-400 text-base font-semibold">
                  Mostafizur Rahman
                </h1>
                <p className="text-sm mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud
                </p>
              </div>
            </div>
            <div className="flex gap-5 justify-start items-center mt-3">
              <div className="avatar ">
                <div className="w-12 rounded-full ">
                  <img src="https://placeimg.com/191/191/people" />
                </div>
              </div>
              <div className="w-full mr-5">
                <input
                  type="text"
                  placeholder="Post a comment"
                  className="input input-bordered w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MiddleHome;
