import { Button } from "@material-tailwind/react";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../Contexts/AuthProvider";
import useTitle from "../Hooks/useTitle";

const AddReview = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  useTitle("Details");
  const [Data, setData] = useState([]);
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

  const SubmitForm = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const photo = form.PhotoUrl.value;
    const email = form.email.value;
    const Review = form.review.value;
    const time = Date.now();

    const SubmitedReview = {

      categoryid: name,
      email: email,
      details: Review,
      img: photo,
      submit: time,
    };

    fetch("https://review-server-iota.vercel.app/addreview", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(SubmitedReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          console.log(data);
          toast.success("Added Riview");
        } else {
          toast.error("Error");
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });

    console.log(SubmitedReview);
  };
  return (
    <div>
      <div>
        <div className="">
          <div className=" px-6  py-12 mx-auto">
            <div className="grid  items-center gap-4 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5">
              <div className="max-w-2xl  mx-auto my-8 space-y-4 text-center md:col-span-2 lg:col-span-2 xl:col-span-2 xl:text-left">
                <p className="text-5xl text-amber-700 text-center p-4">
                  {" "}
                  {CatName}
                </p>
                <img className="rounded-2xl" src={categoryimg} alt="" />

                <p className="text-2xl text-center text-cyan-300">{CatName}</p>
                <p className="text-blue-base-100">{details}</p>
                <div className="   flex justify-center"></div>
              </div>
              <div className=" md:col-span-3 lg:col-span-3 xl:col-span-3">
                <form
                  onSubmit={SubmitForm}
                  className="space-y-8 ng-untouched ng-pristine ng-valid"
                >
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex w-[80vh] mx-auto">
                        <div>
                          <label
                            htmlFor="email"
                            className="block font-semibold text-amber-700"
                          >
                            Category Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            defaultValue={CatName}
                            readOnly
                            placeholder=" Category Name"
                            className="w-[40vh] px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-green-600"
                          />
                        </div>

                        <div className="ml-1">
                          <label
                            htmlFor="email"
                            className="block font-semibold text-amber-700"
                          >
                            Email address
                          </label>
                          <input
                            type="email"
                            name="email"
                            defaultValue={user?.email}
                            readOnly
                            id="email"
                            placeholder="exapmple@gmail.com"
                            className="w-[40vh] px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-green-600"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2"></div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="block font-semibold text-amber-700"
                    >
                      Photo Url
                    </label>
                    <input
                      type="text"
                      name="PhotoUrl"
                      placeholder=" Photo Url"
                      className="w-[80vh] px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-green-600"
                    />
                  </div>

                  {/*  */}

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="block font-semibold text-amber-700"
                    >
                      Review
                    </label>
                    <textarea
                      type="text"
                      name="review"
                      className="w-[80vh] px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-green-600"
                    />
                  </div>

                  <Button type="submit" className="mx-auto" color="amber">
                    Submit
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
