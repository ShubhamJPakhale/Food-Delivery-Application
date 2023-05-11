import { useRouteError } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";

const Error = () => {
  const err = useRouteError(); // This is used to get the error status and status text
  //console.log(err);

  return (
    <section className="p-[40px] font-serif bg-green-50 text-center w-full h-full">
      <div className="flex justify-center">
        <div className="four_zero_four_bg">
          <img
            src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
            className="h-[480px]"
          />
          <h1 className="text-center font-bold text-3xl">
            Error status code - {err.status}
          </h1>

          <div className="contant_box_404">
            <h3 className="text-xl">Look like you're lost</h3>
            <h3 className="text-lg">{err.data}</h3>
            <p className="text-lg">
              the page you are looking for {err.statusText}!
            </p>
            <a href="/" className="underline text-blue-700 text-2xl">
              Go to Home
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Error;
