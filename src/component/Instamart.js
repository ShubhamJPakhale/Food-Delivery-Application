import React, { useState } from "react";
import { VscChevronUp, VscChevronDown } from "react-icons/vsc";
import { FAQs } from "../config";

const Instasection = ({ title, isVisible, description, id, setIsVisible }) => {
  return (
    <div className="min-w-[350px]  m-2 p-3 bg-gray-200 shadow-lg shadow-gray-100 flex flex-col rounded-md ">
      <div className="flex justify-between m-1 items-center">
        <div className="font-semibold  text-lg">{title}</div>
        <div className="mr-5 ">
          {isVisible ? (
            <VscChevronUp
              className="text-3xl cursor-pointer"
              onClick={() => setIsVisible(false)}
            />
          ) : (
            <VscChevronDown
              className="text-3xl cursor-pointer"
              onClick={() => setIsVisible(true)}
            />
          )}
        </div>
      </div>
      <div>
        {isVisible && (
          <p className="text-bio text-base font-normal mr-20 pl-1">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

const Instamart = () => {
  const [visiblesection, setVisibleSection] = useState("");
  return (
    <div className="container">
      <div className="card-container">
        <div className="sm:mt-2 card-container-title pb-5 ">
          Frequently Asked Question's
        </div>
        {FAQs.map((data) => {
          return (
            <Instasection
              title={data.title}
              description={data.description}
              id={data.id}
              key={data.id + 99}
              isVisible={visiblesection === data.id}
              setIsVisible={(show) => {
                if (show) {
                  setVisibleSection(data.id);
                } else {
                  setVisibleSection("");
                }
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Instamart;
