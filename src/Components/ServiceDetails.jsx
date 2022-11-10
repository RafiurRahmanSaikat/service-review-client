import { Button } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useTitle from "../Hooks/useTitle";
import Loader from "./Loader";
import Noreview from "./Noreview";
import Review from "./Review";

const ServiceDetails = () => {
  const { id } = useParams();
  useTitle("Details");
  const [Data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [ReviewData, setReviewData] = useState([]);

  const { CatName, categoryid, categoryimg, details, _id, price, review } =
    Data;

  useEffect(() => {
    fetch(`https://review-server-iota.vercel.app/services/?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.result);
        // return console.log("Inside API", data.result);
      })
      .catch((error) => console.error(error));
  }, []);
  // https://review-server-iota.vercel.app/review
  useEffect(() => {
    fetch(`https://review-server-iota.vercel.app/review/?id=${CatName}`)
      .then((res) => res.json())
      .then((data) => {
        setReviewData(data.result);
        setLoading(false)
        return console.log("Inside API", data.result);
      })
      .catch((error) => console.error(error));
  }, [Data]);
  console.log(review);
  return (
    <div className=" ">
      <div>
        <section className="">
          <div className=" px-6  py-12 mx-auto">
            {loading ? (
              <Loader></Loader>
            ) : (
              <div className="grid  items-center gap-4 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5">
                <div className="max-w-2xl  mx-auto my-8 space-y-4 text-center md:col-span-2 lg:col-span-2 xl:col-span-2 xl:text-left">
                  <p className="text-5xl text-amber-700 text-center p-4">
                    {" "}
                    {CatName}
                  </p>
                  <img className="rounded-2xl" src={categoryimg} alt="" />

                  <p className="text-2xl text-center text-cyan-300">
                    {CatName}
                  </p>
                  <p className="text-blue-base-100">{details}</p>
                  <div className="   flex justify-center">
                    <Link to={`/addreview/${id}`}>
                      <Button className="mx-auto" color="amber">
                        Add Review
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className=" md:col-span-3 lg:col-span-3 xl:col-span-3">
                  <div className="grid gap-4  md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                    {ReviewData?.length !== 0 ? (
                      ReviewData?.map((items, idx) => (
                        <Review key={idx} data={items}></Review>
                      ))
                    ) : (
                      <Noreview></Noreview>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServiceDetails;
