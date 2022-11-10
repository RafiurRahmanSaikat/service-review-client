import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useTitle from "../Hooks/useTitle";
import Loader from "./Loader";
import MyReviewCard from "./MyReviewCard";

const MyReview = () => {
  const { id } = useParams();
  useTitle("Details");
  const [loading, setLoading] = useState(true);
  const [UserReviewData, setUserReviewData] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    fetch(`https://review-server-iota.vercel.app/userreview/?email=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUserReviewData(data.result);
        setLoading(false);
        return console.log("Inside API", data.result);
      })
      .catch((error) => console.error(error));
  }, [reload]);

  return (
    <div>
      <section className=" text-gray-800">
        <div className="container flex flex-col items-center mx-auto mb-12 md:p-10 md:px-12">
          <h1 className="p-4 text-7xl font-semibold text-amber-900 leading-none text-center">
            Your Review
          </h1>
        </div>

        <div>
          {loading ? (
            <Loader></Loader>
          ) : (
            <>
              {UserReviewData.length === 0 ? (
                <p className="text-5xl animate-bounce text-red-600 font-extrabold">
                  You have no review !! <br />
                  Please add some review .
                </p>
              ) : (
                <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
                  {UserReviewData.map((items) => (
                    <div key={items._id}>
                      <MyReviewCard
                        reload={reload}
                        setReload={setReload}
                        data={items}
                      ></MyReviewCard>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default MyReview;
