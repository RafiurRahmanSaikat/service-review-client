import { Button } from "@material-tailwind/react";
import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link } from "react-router-dom";

const CatCard = ({ data }) => {
  const { details, CatName, categoryimg, price, _id } = data;
  return (
    <div>
      <PhotoProvider>
        <div className=" gap-4   p-4 rounded-lg">
          <PhotoView key={_id} src={categoryimg}>
            <img
              className="rounded-xl w-full h-[40vh]"
              src={categoryimg}
              alt=""
            />
          </PhotoView>

          <div className="px-5 py-3">
            <h5 className="mb-1 mt-2 text-2xl font-semibold">{CatName}</h5>
            <p className="text-md mb-5 mt-3">{details.slice(0, 150)}...</p>
            <div className="flex justify-between">
              <p className="text-lg text-orange-900 font-semibold">
                <span className="font-bold text-green-700"> Price : </span>${" "}
                {price}
                {" /- Only "}
              </p>

              <Link to={`/services/${_id}`}>
                <Button className="w-[10em]" color="red">
                  Details
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </PhotoProvider>
    </div>
  );
};

export default CatCard;
