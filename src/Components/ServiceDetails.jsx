import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Noreview from "./Noreview";
import Review from "./Review";

const ServiceDetails = () => {
  const { id } = useParams();

  const [Data, setData] = useState([]);
  const { CatName, categoryid, categoryimg, details, price, review } = Data;

  useEffect(() => {
    fetch(`https://review-server-iota.vercel.app/services/?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.result);
        // return console.log("Inside API", data.result);
      })
      .catch((error) => console.error(error));
  }, []);
  console.log(review);
  return (
    <div className=" ">
      <div>
        <section className="">
          <div className=" px-6  py-12 mx-auto">
            <div className="grid  items-center gap-4 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5">
              <div className="max-w-2xl  mx-auto my-8 space-y-4 text-center md:col-span-2 lg:col-span-2 xl:col-span-2 xl:text-left">
                <p className="text-5xl text-center p-4"> {CatName}</p>
                <img className="rounded-2xl" src={categoryimg} alt="" />
                <p>{CatName}</p>
                <p>{details}</p>
                <p>{categoryid}</p>
              </div>
              <div className=" md:col-span-3 lg:col-span-3 xl:col-span-3">
                <div className="grid gap-4  md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                  {review?.length !== 1 ? (
                    review?.map((items, idx) => (
                      <Review key={idx} data={items}></Review>
                    ))
                  ) : (
                    <Noreview></Noreview>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServiceDetails;
