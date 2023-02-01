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
import Footer from "../../Shared/Footer/Footer";

const ContactPage = () => {
  const handleSubmit = () => {
    alert("Walcome to send a Message");
  };
  return (
    <div className="">
      <div className="hero relative  ">
        <div className="bg-red-200 w-full h-72 "></div>
        <div className="absolute top-20  ">
          <div className="hero-content   flex-col shadow-2xl bg-base-100 lg:flex-row-reverse">
            <section className=" text-left ">
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
            <div>
              <form onClick={() => handleSubmit()} className="card-body">
                <h1 className="text-xl">Leave a Message</h1>
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="Enter your name *"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <input
                    type="email"
                    placeholder="Enter your email *"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="Enter your phone *"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <textarea
                    type="text"
                    placeholder="Leave a message for us *"
                    className="input input-bordered"
                  />
                </div>
                <div className=" mt-6">
                  <button className="btn btn-primary capitalize">
                    Send a Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute w-full bottom-0">
        <Footer />
      </div>
    </div>
  );
};

export default ContactPage;
