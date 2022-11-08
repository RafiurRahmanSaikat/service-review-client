import React from "react";

const CatCard = ({ data }) => {
  const { details, CatName, categoryimg, price } = data;
  return (
    <div>
      <div className="rounded gap-4 outline outline-4 outline-gray-400 p-4 bg-white">
        <img className="rounded-xl w-full h-[40vh]" src={categoryimg} alt="" />
        <div className="px-5 py-3">
          <h5 className="mb-1 mt-2 text-2xl font-semibold">{CatName}</h5>
          <p className="text-md mb-5 mt-3">{details.slice(0, 150)}...</p>
          <p className="text-lg text-orange-900 font-semibold">
            <span className="font-bold text-green-700"> Price : </span>$ {price}
            {" //- Only "}
          </p>
          {/* <Link className="text-sm font-semibold uppercase text-teal-500 hover:underline">
            View Details
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default CatCard;
