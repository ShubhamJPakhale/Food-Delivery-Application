import React from "react";
import ReactDOM from "react-dom/client";
import contactus from "../images/contactus.svg";

const Contact = () => {
  return (
    <>
      <div className="flex justify-between m-5 flex-wrap lg:flex-nowrap">
        <div className="float-left">
          <img src={contactus} />
        </div>

        <div className="float-right">
          <div className="font-bold text-3xl text-center text-red-300 m-3">
            {" "}
            Contact Us{" "}
          </div>
          <div className="font-medium text-xl text-black-200 ">
            Welcome to the Food Junction Application... Please provide us your
            issue... we are happy to help you better..
          </div>
          <div className="font-normal text-lg text-black-100 ">
            You can also react out to us at below addressess
          </div>
          <div className="font-bold text-2xl text-purple-600 m-5">
            Email - Support@foodjunction.com <br />
            Mobile - +91 9999999999 <br />
            Helpline (24*7) - 1800 47512
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
