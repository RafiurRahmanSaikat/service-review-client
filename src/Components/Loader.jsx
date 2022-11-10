import React from "react";

const Loader = () => {
  return (
    <div>
      <>
        <p className="text-red-600 font-extrabold p-4 text-5xl">
          Loading .......
        </p>
        <div className="w-40 h-40 mx-auto border-4 border-dashed rounded-full animate-spin border-blue-600 "></div>
      </>
    </div>
  );
};

export default Loader;
