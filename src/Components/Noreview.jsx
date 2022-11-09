import React from "react";

const Noreview = () => {
  return (
    <div className="relative right-1/2 left-1/2 ">
      <div className="py-4 rounded shadow-md w-60 sm:w-80 animate-pulse dark:bg-gray-900">
        <div className="flex p-4 space-x-4 sm:px-8">
          <div className="flex-shrink-0 w-16 h-16 rounded-full dark:bg-gray-700"></div>
          <div className="flex-1 py-2 space-y-4">
            <div className="w-full h-3 rounded dark:bg-gray-700"></div>
            <div className="w-5/6 h-3 rounded dark:bg-gray-700"></div>
          </div>
        </div>
          <h1 className="text-5xl text-red-700 p-8">No Review Found !!</h1>
        <div className="p-4 space-y-4 sm:px-8">
          <div className="w-full h-4 rounded dark:bg-gray-700"></div>
          <div className="w-full h-4 rounded dark:bg-gray-700"></div>
          <div className="w-3/4 h-4 rounded dark:bg-gray-700"></div>
        </div>
      </div>
    </div>
  );
};

export default Noreview;
