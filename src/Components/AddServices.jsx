import { Button } from "@material-tailwind/react";
import React from "react";
import { toast } from "react-toastify";
import Edit from "../Assest/edit.svg";
const AddServices = () => {
  const SubmitForm = (event) => {
    event.preventDefault();
    const form = event.target;

    const CatName = form.CatName.value;
    const price = form.price.value;
    const categoryimg = form.categoryimg.value;
    const details = form.details.value;
    const time = Date.now();

    const NewService = { submit: time, price, categoryimg, details, CatName };

    fetch("https://review-server-iota.vercel.app/addNewService", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(NewService),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          console.log(data);
          toast.success("Service Added");
          form.reset();
        } else {
          toast.error("Error");
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });

    console.log(NewService);
  };

  return (
    <div>
      <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32">
        <div className="flex flex-col justify-between">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
              Added A New Service
            </h2>
          </div>
          <img src={Edit} alt="" className="p-6 h-[50vh] md:h-[50vh]" />
        </div>
        <form
          onSubmit={SubmitForm}
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div>
            <label className="text-xl text-orange-900 font-bold ">
              Category Name
            </label>
            <input
              name="CatName"
              type="text"
              placeholder=" Category Name"
              className="w-full p-3 mt-2 rounded bg-gray-100"
            />
          </div>
          <div>
            <label className="text-xl text-orange-900 font-bold ">
              Image URL
            </label>
            <input
              name="categoryimg"
              type="text"
              placeholder=" Category Name"
              className="w-full p-3 mt-2 rounded bg-gray-100"
            />
          </div>
          <div>
            <label className="text-xl text-orange-900 font-bold ">Price</label>
            <input
              placeholder=" $ Price"
              name="price"
              className="w-full p-3 mt-2 rounded bg-gray-100"
            />
          </div>
          <div>
            <label className="text-xl text-orange-900 font-bold ">
              Details
            </label>
            <textarea
              name="details"
              placeholder="Details"
              className="w-full p-3 mt-2 rounded bg-gray-100"
            ></textarea>
          </div>
          <Button type="submit">Submit </Button>
        </form>
      </div>
    </div>
  );
};

export default AddServices;
