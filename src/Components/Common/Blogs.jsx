import React from "react";

const Blogs = () => {
  return (
    <div className=" flex flex-wrap mx-auto justify-center items-center">
      {/* Blog 01 */}
      <section className="m-4">
        <div className="container flex flex-col w-[100vw]   p-6 mx-auto divide-y rounded-md divide-black  outline outline-double outline-amber-900   ">
          <div className="flex justify-between p-4">
            <div className="flex space-x-4">
              <div>
                <h4 className="font-bold">What Is JWT? How Its Works</h4>
              </div>
            </div>
          </div>
          <div className="p-4 space-y-2 text-sm text-gray-900">
            <p className="text-xl text-red-700 text-start">
              JWT, or JSON Web Token, is an open standard used to share security
              information between two parties — a client and a server. Each JWT
              contains encoded JSON objects, including a set of claims.
            </p>
            <p className="text-xl text-start">
              In authentication, when the user successfully logs in using their
              credentials, a JSON Web Token will be returned. Since tokens are
              credentials, great care must be taken to prevent security issues.
              In general, you should not keep tokens longer than required. You
              also should not store sensitive session data in browser storage
              due to lack of security.
            </p>
          </div>
        </div>
      </section>
      <section className="m-4">
        <div className="container flex flex-col w-[100vw]   p-6 mx-auto divide-y rounded-md divide-black  outline outline-double outline-amber-900   ">
          <div className="flex justify-between p-4">
            <div className="flex space-x-4">
              <div>
                <h4 className="font-bold">
                  Difference between SQL and NoSQL ?
                </h4>
              </div>
            </div>
          </div>
          <div className="p-4 space-y-2 text-sm text-gray-900">
            <p className="text-xl text-start">
              SQL databases are relational, NoSQL databases are non-relational.
            </p>
            <p className="text-xl text-start">
              SQL databases use structured query language and have a predefined
              schema. NoSQL databases have dynamic schemas for unstructured
              data.
            </p>
            <p className="text-xl text-start">
              SQL databases are vertically scalable, while NoSQL databases are
              horizontally scalable.
            </p>
            <p className="text-xl text-start">
              SQL databases are better for multi-row transactions, while NoSQL
              is better for unstructured data like documents or JSON.
            </p>
          </div>
        </div>
      </section>

      {/* Blog 02 */}
      <section className="m-4">
        <div className="container flex flex-col w-[100vw]   p-6 mx-auto divide-y rounded-md divide-black  outline outline-double outline-amber-900   ">
          <div className="flex justify-between p-4">
            <div className="flex space-x-4">
              <div>
                <h4 className="font-bold">
                  How does Node handle multiple requests at the same time?
                </h4>
              </div>
            </div>
          </div>
          <div className="p-4 space-y-2 text-sm text-gray-900">
            <p className="text-xl text-start">
              How NodeJS handle multiple client requests? NodeJS receives
              multiple client requests and places them into EventQueue. NodeJS
              is built with the concept of event-driven architecture. NodeJS has
              its own EventLoop which is an infinite loop that receives requests
              and processes them.
            </p>
          </div>
        </div>
      </section>

      <section className="m-4">
        <div className="container flex flex-col w-[100vw]   p-6 mx-auto divide-y rounded-md divide-black  outline outline-double outline-amber-900   ">
          <div className="flex justify-between p-4">
            <div className="flex space-x-4">
              <div>
                <h4 className="font-bold">
                  Difference between Node.JS and Javascript ?
                </h4>
              </div>
            </div>
          </div>
          <div className="p-4 space-y-2 text-sm text-gray-900">
            <p className="text-xl text-start">
              Javascript is a programming language that is used for writing
              scripts on the website. NodeJS is a Javascript runtime
              environment.
            </p>
            <p className="text-xl text-start">
              Javascript can only be run in the browsers. We can run Javascript
              outside the browser with the help of NodeJS.
            </p>
            <p className="text-xl text-start">
              Javascript is capable enough to add HTML and play with the DOM.
              Nodejs does not have capability to add HTML tags.
            </p>
            <p className="text-xl text-start">
              Javascript is used in frontend development. Nodejs is used in
              server-side development.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
