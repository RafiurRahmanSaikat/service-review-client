import { Button } from "@material-tailwind/react";
import React, { useState } from "react";
import { toast } from "react-toastify";

const MyReviewCard = ({ reload, setReload, data }) => {
  const [edit, setedit] = useState(false);

  const { name, img, details, CatName, _id, submit } = data;

  const DELETE = (Itemsid) => {
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

  const SUBMIT = (event) => {
    event.preventDefault();
    const review = event.target.review.value;
 

    const updateDoc = {
      details: review,
      img,
      name,
      CatName,
      submit,
    };
  // console.log(updateDoc);
    fetch(`https://review-server-iota.vercel.app/update/?id=${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(updateDoc)
    }).then(res => res.json())
    .then(data => {
      if(data.success){
        setedit(!edit);
        setReload(!reload);
        toast.success(data.message);
        
      } else {
        toast.err(data.error)
      }
    })
    .catch(err => toast.error(err.message))
  
  };

  const EDIT = (Itemsid) => {
    setedit(!edit);

    console.log(Itemsid);
  };
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
            <Button onClick={() => EDIT(_id)} color="deep-purple">
              Edit
            </Button>
            <Button onClick={() => DELETE(_id)} color="red">
              Delete
            </Button>
          </div>
        </div>
        <div className="p-4 space-y-2 text-sm text-gray-900">
          <p className="text-3xl font-semibold">{CatName}</p>

          {edit ? (
            <form onSubmit={SUBMIT} className="space-y-2">
              <label
                htmlFor="email"
                className="block font-semibold text-amber-700"
              >
                Review
              </label>
              <textarea
                type="text"
                defaultValue={details}
                name="review"
                className="w-[100%] h-[40vh] p-4  border rounded-md border-gray-300 bg-gray-50  focus:border-green-600"
              />
              <Button type="submit" color="green">
                Submit
              </Button>
            </form>
          ) : (
            <p className="text-base">{details}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default MyReviewCard;
