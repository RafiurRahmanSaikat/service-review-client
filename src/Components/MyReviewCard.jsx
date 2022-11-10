import { Button } from "@material-tailwind/react";
import React from "react";
import { toast } from "react-toastify";

const MyReviewCard = ({ reload, setReload, data }) => {
  const { name, img, details, CatName, _id } = data;

  const DELETE = (Itemsid) => {
    console.log(Itemsid);
    fetch(`https://review-server-iota.vercel.app/delete/?id=${Itemsid}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setReload(!reload);
          toast.success(data.message);
        } else {
          toast.error(data.error);
        }
      })
      .catch((err) => toast.error(err.message));
  };
  // const Edit = (Itemsid) => {
  //   console.log(Itemsid);
  //   fetch(`https://review-server-iota.vercel.app/delete/?id=${Itemsid}`, {
  //     method: "DELETE",
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.success) {
  //         setReload(!reload);
  //         toast.success(data.message);
  //       } else {
  //         toast.error(data.error);
  //       }
  //     })
  //     .catch((err) => toast.error(err.message));
  // };
  return (
    <section className="m-4">
      <div className="container flex flex-col w-[100vw]  max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-300 outline outline-double   ">
        <div className="flex justify-between p-4">
          <div className="flex space-x-4">
            <div>
              <img
                src={img}
                alt=""
                className="object-cover w-12 h-12 rounded-full"
              />
            </div>
            <div>
              <h4 className="font-bold">{name}</h4>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-yellow-500">
            <Button color="deep-purple">Edit</Button>
            <Button onClick={() => DELETE(_id)} color="red">
              Delete
            </Button>
          </div>
        </div>
        <div className="p-4 space-y-2 text-sm text-gray-900">
          <p className="text-3xl font-semibold">{CatName}</p>
          <p className="text-base ">{details}</p>
        </div>
      </div>
    </section>
  );
};

export default MyReviewCard;
