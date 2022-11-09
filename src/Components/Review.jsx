import React from "react";

const Review = ({data}) => {
    const {details, img, name}=data
    console.log( data);


  return (
    <div>
      <div className="p-4 rounded shadow-md dark:bg-gray-900">
        <p>{details}</p>
        <div className="flex items-center mt-4 space-x-4">
          <img
            src={img}
            alt=""
            className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
          />
          <div>
            <p className="text-lg font-semibold">{name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
