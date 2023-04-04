import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaFileExport } from "react-icons/fa";
import { AuthContext } from "../../../contexts/AuthProvider";
import "./MiddleHome.css";

const MiddleHome = () => {
  const { user } = useContext(AuthContext);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setUsers(data);
      });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleUpdate = () => {
    console.log();
  };

  const handlePost = (data) => {
    console.log("post", data);
    // ----------------------------------------------------
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    // ----------------------------------------------------
  };
  return (
    <div>
      <section className="flex gap-5  justify-center items-center ">
        <div className="avatar">
          <div className="w-20 rounded-full">
            {/* <img src={users?.image} /> */}
            <img
              alt="image"
              src="https://mediaproxy.salon.com/width/1200/https://media.salon.com/2016/08/life_essay_catfish_featured.jpg"
            />
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
        <form
          onSubmit={handleSubmit(handlePost)}
          className="modal-box relative"
        >
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
                {/* <img src={users?.image} /> */}
                <img
                  alt="image"
                  src="https://mediaproxy.salon.com/width/1200/https://media.salon.com/2016/08/life_essay_catfish_featured.jpg"
                />
              </div>
            </div>
            <div>
              <h1 className="text-xl font-semibold">
                {users?.FirstName} {users?.LastName}{" "}
              </h1>

              <select
                {...register("condition", {
                  required: "Must be selected user",
                })}
                // className="select select-bordered  max-w-lg"
              >
                <option selected>Public</option>
                <option>Friend</option>
                <option>Private</option>
              </select>
              {/* <select>
                <option>Public</option>
                <option>Friend</option>
                <option>Private</option>
              </select> */}
            </div>
          </section>
          <div>
            <textarea
              {...register("title", {
                required: "Your product name is required",
              })}
              className="textarea textarea-bordered w-full h-32 my-5"
            />
            {/* <textarea
              className="textarea textarea-bordered w-full h-32 my-5"
              placeholder="Write what you wish"
            ></textarea> */}
          </div>{" "}
          <section className="border border-gray-400 rounded-xl mb-5 p-5 text-left flex justify-between">
            <div className="">Add Image </div>
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
              <div>
                <label className="label">
                  {" "}
                  <span className="label">Select Your Image</span>
                </label>
                <input
                  type="file"
                  {...register("image", {
                    required: "Photo is Required",
                  })}
                  className=" input-bordered w-full max-w-xs"
                />
                {errors.image && (
                  <p className="text-red-500">{errors.image.message}</p>
                )}
              </div>
            </div>
          </section>
          <button className="btn rounded-xl w-full capitalize  text-white text-xl">
            Post
          </button>
        </form>
      </div>

      {/* Modal image*/}
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <form onSubmit={handleUpdate} className="modal-box">
          <h3 className="font-bold text-lg mb-5">Select Your Image</h3>
          <input type="file" className=" input-bordered w-full max-w-xs" />

          <div className="modal-action">
            <label htmlFor="my-modal-6" className="btn">
              Update
            </label>
          </div>
        </form>
      </div>

      <section className="mt-10 rounded-xl bg-gray-200">
        <div className="card  ">
          <figure className="">
            <img
              className="w-full"
              src="https://img.freepik.com/free-vector/savannah-landscape-with-acacia-trees-night-vector-cartoon-illustration-african-savanna-with-full-moon-stars-dark-sky-concept-safari-vacation-trip-travel_107791-11532.jpg?w=2000"
              alt="Shoes"
            />
          </figure>
          <div className="flex gap-5 justify-start items-center m-3">
            <div className="avatar ">
              <div className="w-20 rounded-full ">
                <img src="https://cdn.theorg.com/58dde501-b133-4d94-bbf8-0a221413ced4_thumb.jpg" />
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
                  <img src="https://media.istockphoto.com/id/155431546/photo/young-man-profile.jpg?s=612x612&w=0&k=20&c=ptdl8HgleBpK7kECIeEQORphqysBlsSOouDAEwhjIpY=" />
                </div>
              </div>
              <div className="">
                <h1 className="text-blue-400 text-base font-semibold">
                  Noman Islam
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
                  <img src="https://us.123rf.com/450wm/fizkes/fizkes2011/fizkes201102042/159430998-headshot-portrait-profile-picture-of-pretty-smiling-young-woman-posing-indoors-looking-at-camera.jpg?ver=6" />
                </div>
              </div>
              <div className="">
                <h1 className="text-blue-400 text-base font-semibold">
                  Fatema Howladar
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
                  <img src="https://mediaproxy.salon.com/width/1200/https://media.salon.com/2016/08/life_essay_catfish_featured.jpg" />
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
              src="hhttps://img.freepik.com/premium-vector/wildfires-are-burning-near-city-limits_353206-619.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="flex gap-5 justify-start items-center m-3">
            <div className="avatar ">
              <div className="w-20 rounded-full ">
                <img src="https://perfectczechwomen.com/wp-content/uploads/2019/04/New-Profile-15-500x580.jpg" />
              </div>
            </div>
            <div className="">
              <h1 className="text-blue-400 text-2xl font-semibold">
                Alexis Clark
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
                  <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80" />
                </div>
              </div>
              <div className="">
                <h1 className="text-blue-400 text-base font-semibold">John</h1>
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
                  <img src="https://perfectczechwomen.com/wp-content/uploads/2019/04/New-Profile-10-500x530.jpg" />
                </div>
              </div>
              <div className="">
                <h1 className="text-blue-400 text-base font-semibold">
                  Sophia page
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
                  <img src="https://mediaproxy.salon.com/width/1200/https://media.salon.com/2016/08/life_essay_catfish_featured.jpg" />
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
