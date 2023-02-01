import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaGooglePlusG,
  FaLinkedin,
  FaMailBulk,
  FaPhoneAlt,
  FaSearchLocation,
  FaTwitter,
} from "react-icons/fa";

const ContactPage = () => {
  return (
    <div>
      <div className="hero  bg-base-200 ">
        <div className="hero-content flex-col  lg:flex-row-reverse">
          <section className="text-center lg:text-left">
            <h1 className="text-2xl font-bold">Reach Us</h1>
            <div className="flex items-center my-3 gap-5">
              <p className="text-green-400 text-xl">
                <FaPhoneAlt />
              </p>
              <p>+88 (019) 5016 5017</p>
            </div>
            <div className="flex items-center my-3 gap-5">
              <p className="text-green-400 text-xl">
                <FaMailBulk />
              </p>
              <p>mostafizur0195@gmail.com</p>
            </div>
            <div className="flex items-center my-3 gap-5">
              <p className="text-green-400 text-xl">
                <FaSearchLocation />
              </p>
              <p>Dhaka, Bangladesh</p>
            </div>

            <div className="flex gap-5 mt-10">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://mail.google.com/mail/u/0/#inbox?compose=CSkGSFfgsGmrkzshVSPhnZddFkcnDWtSLtrdLVrgKqtbFQCHmgnWqfLZfBDLlGbbbrZWxVPTHFhBtFtrKDxhkqjKFdmPWdMTjFghRnxQGWpFpQvsFnWzzdPFbVmMcwvHzvJtCXbGRRHTmpPgmJVQljHqNTrcjZVGqrR"
                className="text-2xl hover:text-accent"
              >
                <FaGooglePlusG />
              </a>
              <h3 className="text-2xl hover:text-accent">
                <FaGithub />
              </h3>

              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/mostafizur.proo/"
                className="text-2xl hover:text-accent"
              >
                <FaFacebook />
              </a>
              <h3 className="text-2xl hover:text-accent">
                <FaLinkedin />
              </h3>
              <a className="text-2xl hover:text-accent">
                <FaTwitter />
              </a>
            </div>
          </section>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
