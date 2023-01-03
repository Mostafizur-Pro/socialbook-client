import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import {
  FaFacebook,
  FaGithub,
  FaGooglePlusG,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthProvider";
import useTitle from "../../hooks/useTitle";

import Navbar from "../Shared/Navber/Navbar";

const Register = () => {
  useTitle("Register");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser, updateUser } = useContext(AuthContext);

  const hangleRegister = (data) => {
    // const userInfoFirebase = {
    //   displayName: data.FirstName + " " + data.LastName,
    //   photoUrl: data.image,
    //   birthday: data.day + "." + data.month + "." + data.year,
    //   data,
    // };
    // console.log("userInfoFirebase", userInfoFirebase);
    // updateUserProfile(userInfoFirebase);
    // console.log("Data", data);
    saveUserInServer(data);
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        navigate("/");
        // console.log("User in createUser", user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const saveUserInServer = (userInfo) => {
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("saveUser", data);
        // setCreatedUserEmail(userInfo.email);
      });
  };

  // const updateUserProfile = (userInfofirebase) => {
  //   updateUser(userInfofirebase)
  //     .then(() => {})
  //     .catch((err) => console.log(err));
  // };
  return (
    <div>
      <div>
        <Navbar></Navbar>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: `url("https://media.istockphoto.com/id/490577899/photo/abstract-image-of-business-peoples-busy-life.jpg?s=170667a&w=0&k=20&c=pS_lHcGZkRPv5qpDhCQGCRZHD9Fu6Qj1DBBjqPqyYcw=")`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center ">
            {/* Login  */}
            <div className="hero ">
              <div className="hero-content w-4/5 gap-0 flex-col lg:flex-row">
                {/* Part-1 */}
                <div className="text-center lg:text-left mr-5 mx-auto">
                  <h1 className="text-5xl text-white font-bold">
                    Make Cool Friends
                  </h1>
                  <p className="py-6 text-white">
                    Friend Finder is a social network template that can be used
                    to connect people. The template offers Landing pages, News
                    Feed, Image/Video Feed, Chat Box, Timeline and lot more.
                  </p>
                </div>
                {/* Part-1 */}
                <div className="flex flex-col  border-opacity-50">
                  {/* <div
                class="mixed"
                className="grid  h-20 card bg-base-500 rounded-box place-items-center"
              >
                <button className="btn glass">Login</button>
                <div className="divider"></div>
              </div> */}
                  <div className=" glass p-5 rounded-l-lg   hidden lg:block ">
                    <div class="box  mixed">
                      <Link
                        className="p-10 font-semibold text-gray-400"
                        to="/login"
                      >
                        Login
                      </Link>
                    </div>
                    <hr className="w-1/2 mx-auto" />
                    <div class="box mixed">
                      <Link
                        className="p-10 font-semibold text-white"
                        to="/register"
                      >
                        Register
                      </Link>
                    </div>
                  </div>
                  <div className=" glass p-5 rounded-t-lg  flex  lg:hidden ">
                    <div class="">
                      <Link
                        className="p-10 font-semibold text-gray-400"
                        to="/login"
                      >
                        Login
                      </Link>
                    </div>
                    <div className="w-1/2 flex mx-auto">|</div>
                    <div class="">
                      <Link
                        className="p-10 font-semibold text-white"
                        to="/register"
                      >
                        Register
                      </Link>
                    </div>
                  </div>

                  {/* <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
                content
              </div> */}
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                  <form
                    onSubmit={handleSubmit(hangleRegister)}
                    className="card-body"
                  >
                    <h1 className="text-5xl text-left text-accent ">
                      Register Now
                    </h1>
                    <p className=" text-left text-gray-400 ">
                      Be cool and join today. Meet millions
                    </p>
                    <section className="flex gap-5">
                      <div className="form-control w-full max-w-xs">
                        <input
                          type="text"
                          placeholder="First name"
                          {...register("FirstName", {
                            required: "Name is required",
                          })}
                          className="input input-bordered w-full max-w-xs"
                        />
                        {errors.FirstName && (
                          <p className="text-red-600 text-left">
                            {errors.FirstName?.message}
                          </p>
                        )}
                      </div>
                      <div className="form-control w-full max-w-xs">
                        <input
                          type="text"
                          placeholder="Last name"
                          {...register("LastName", {
                            required: "Your Name is required",
                          })}
                          className="input input-bordered w-full max-w-xs"
                        />
                      </div>
                    </section>
                    <div className="form-control w-full max-w-xs">
                      <input
                        type="email"
                        placeholder="Your Email"
                        {...register("email", {
                          required: "Email Address is required",
                        })}
                        className="input input-bordered w-full max-w-xs"
                      />
                      {errors.email && (
                        <p className="text-red-600 text-left">
                          {errors.email?.message}
                        </p>
                      )}
                    </div>
                    <div className="form-control w-full max-w-xs">
                      <input
                        type="password"
                        placeholder="Your Password"
                        {...register("password", {
                          required: "Password is required",
                          minLength: {
                            value: 6,
                            message: "Password must be 6 characters or longer",
                          },
                        })}
                        className="input input-bordered w-full max-w-xs"
                      />

                      {errors.password && (
                        <p className="text-red-600 text-left">
                          {errors.password?.message}
                        </p>
                      )}
                    </div>
                    <h1 className="text-xl text-left">Date of Birth</h1>
                    <section className="flex gap-5">
                      <div className="form-control w-full max-w-xs">
                        <input
                          type="text"
                          placeholder="Day"
                          {...register("day", {})}
                          className="input input-bordered w-full max-w-xs"
                        />
                      </div>
                      <div className="form-control w-full max-w-xs">
                        <input
                          type="text"
                          placeholder="Month"
                          {...register("month", {})}
                          className="input input-bordered w-full max-w-xs"
                        />
                      </div>
                      <div className="form-control w-full max-w-xs">
                        <input
                          type="text"
                          placeholder="Year"
                          {...register("year", {})}
                          className="input input-bordered w-full max-w-xs"
                        />
                      </div>
                    </section>

                    <section className="flex justify-around">
                      <div className="flex justify-center gap-2 items-center">
                        <input
                          type="radio"
                          name="male"
                          {...register("male", {})}
                        />
                        <label>Male</label>
                      </div>
                      <div className="flex justify-center gap-2 items-center">
                        <input
                          type="radio"
                          name="female"
                          {...register("male", {})}
                          className="  w-full max-w-xs"
                        />
                        <label>Female</label>
                      </div>
                    </section>
                    <div className="form-control w-full max-w-xs">
                      <input
                        type="text"
                        placeholder="Image url"
                        {...register("image", {
                          required: "Your image is required",
                        })}
                        className="input input-bordered w-full max-w-xs"
                      />
                    </div>

                    <div className="form-control ">
                      <label className="label text-accent">
                        {" "}
                        <Link to="/login" className="label">
                          Already have an account
                        </Link>
                      </label>
                      <button className="btn btn-accent w-3/6 rounded-3xl text-white">
                        Register Now
                      </button>
                    </div>
                    <div className="flex gap-5 mt-10">
                      <h3 className="text-2xl hover:text-accent">
                        <FaGooglePlusG />
                      </h3>

                      <h3 className="text-2xl hover:text-accent">
                        <FaGithub />
                      </h3>
                      <h3 className="text-2xl hover:text-accent">
                        <FaFacebook />
                      </h3>
                      <h3 className="text-2xl hover:text-accent">
                        <FaLinkedin />
                      </h3>
                      <h3 className="text-2xl hover:text-accent">
                        <FaTwitter />
                      </h3>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
