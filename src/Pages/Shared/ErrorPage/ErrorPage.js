import React from "react";
import { Link } from "react-router-dom";
import errorImage from "../../../assete/404/404.png";

const ErrorPage = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <img src={errorImage} alt="" />
        <div className="mt-96 text-center">
          <h1 className="text-4xl my-2 ">𝑾𝒉𝒐𝒐𝒑𝒔!</h1>
          <p className="text-xs mb-10">
            Looks like you are lost. But don't worry there is plenty to see!!
          </p>
          <Link to="/" className="btn glass text-black">
            Go to Home Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
