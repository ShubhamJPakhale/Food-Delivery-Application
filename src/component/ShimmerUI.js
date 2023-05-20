import React from "react";
import ReactDOM from "react-dom/client";

// Shimmer restaurant card to display with animation
const CardShimmer = () => {
  return (
    <div className="w-[300px] h-[280px] p-[10px] m-[10px] border border-gray-300 shadow rounded-md  max-w-sm mx-auto">
      <div className="animate-pulse ">
        <div className="w-[280px] h-[150px] bg-gray-300 mt-4 rounded-lg"></div>
        <div className="h-3 bg-gray-300 mt-4 g-slate-700 rounded "></div>
        <div className="h-3 bg-gray-300 mt-4 g-slate-700 rounded "></div>
        <div className="h-3 bg-gray-300 mt-4 g-slate-700 rounded "></div>
      </div>
    </div>
  );
};

/* index is used as second parameter while using index as a key in component otherwise we will get 
   Encountered two children with the same key, ``. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted 
*/

// shimmer to show menu of restaurant card with animation
export const MenuShimmer = () => {
  return (
    <>
      <div className="flex  bg-gray-50 ">
        <div className="h-[150px] w-[200px]  m-[15px] bg-gray-300  animate-pulse" />
        <div className="w-[300px] ml-[40px]">
          <div className=" h-3 bg-gray-300 mt-4 g-slate-700 rounded "></div>
          <div className=" h-3 bg-gray-300 mt-4 g-slate-700 rounded "></div>
          <div className=" h-3 bg-gray-300 mt-4 g-slate-700 rounded "></div>
          <div className=" h-3 bg-gray-300 mt-4 g-slate-700 rounded "></div>
        </div>
      </div>

      <div className="menu-items-list">
        {Array(20)
          .fill("")
          .map((element, index) => (
            <div className="flex justify-center p-[10px]" key={index}>
              <div className="w-[700px] ">
                <div className=" h-3 bg-gray-300 mt-4 g-slate-700 rounded "></div>
                <div className=" h-3 bg-gray-300 mt-4 g-slate-700 rounded "></div>
                <div className=" h-3 bg-gray-300 mt-4 g-slate-700 rounded "></div>
                <div className=" h-3 bg-gray-300 mt-4 g-slate-700 rounded "></div>
              </div>
              <div className="h-[150px] w-[200px]  ml-[100px] bg-gray-300  animate-pulse" />
            </div>
          ))}
      </div>
    </>
  );
};

const Shimmer = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center m-2 " data-testid="shimmer">
        {new Array(12).fill("").map((element, index) => (
          <CardShimmer key={index} />
        ))}
      </div>
    </>
  );
};

export default Shimmer;
