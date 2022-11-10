import React from "react";

const EditReview = () => {
  return (
    <section className="m-4">
      <div className="container flex flex-col w-[100vw]  max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-300 outline outline-double   ">
        <div className="flex justify-between p-4">
          <div className="flex space-x-4">
            <div>
              <img alt="" className="object-cover w-12 h-12 rounded-full" />
            </div>
            <div>
              <h4 className="font-bold">namw</h4>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-yellow-500"></div>
        </div>
        <div className="p-4 space-y-2 text-sm text-gray-900">
          <p className="text-3xl font-semibold">cat name</p>
          <p className="text-base ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            vel dolores velit saepe iusto asperiores fugit itaque alias
            voluptates harum, corporis necessitatibus doloribus odit ad possimus
            cupiditate esse eum voluptas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EditReview;
