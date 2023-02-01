import React from "react";
import banner from "../../../../assete/FAQ/Banner.jpg";

const FAQBanner = () => {
  return (
    <div>
      <div className="hero h-96 " style={{ backgroundImage: `url(${banner})` }}>
        <div className="hero-overlay "></div>
        <div className="hero-content text-center ">
          <div className="max-w-md">
            <h1 className="mb-5 text-2xl  text-white font-bold">
              𝘏𝘰𝘸 𝘊𝘢𝘯 𝘞𝘦 𝘏𝘦𝘭𝘱 𝘠𝘰𝘶?
            </h1>
            <div className="form-control">
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Search…"
                  className="input input-bordered"
                />
                <button className="btn btn-square">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQBanner;
