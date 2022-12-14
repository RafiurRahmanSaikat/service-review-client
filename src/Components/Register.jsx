import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import RegPic from "../Assest/reg.svg";
import { AuthContext } from "../Contexts/AuthProvider";

const Register = () => {
  const { SignUp, setProfile } = useContext(AuthContext);

  const SubmitForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.PhotoUrl.value;
    const email = form.email.value;
    const password = form.password.value;
    const ConfrimPassword = form.ConfrimPassword.value;
    console.log(name, photo, password);
    const Profile = { displayName: name, photoURL: photo };

    if (password !== ConfrimPassword) {
      toast.error("Password not matching !");
      return;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 digit!");
      return;
    }
    SignUp(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        form.reset();
        setProfile(Profile)
          .then((result) => {})
          .catch((error) => {
            const errorMessage = error.message;
            toast.error(errorMessage);
          });
        toast.success("You are successfully registered ");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };
  return (
    <>
      <div className="  relative overflow h-[93vh]">
        <img
          src={RegPic}
          required
          className="absolute  h-[100vh] w-[100vw] object-center"
        />

        <h1 className="text-5xl text-black font-bold underline decoration-yellow-400">
          {" "}
          Please Complete Registration
        </h1>
        <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-2 xl:py-4">
          <div className="w-[50vh] mx-auto bg-gray-200 p-10 rounded-3xl  font-mono flex flex-col items-center relative z-10">
            <form
              onSubmit={SubmitForm}
              className="space-y-8 ng-untouched ng-pristine ng-valid"
            >
              <div className="space-y-4">
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block font-semibold text-blue-600"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-green-600"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block font-semibold text-blue-600"
                  >
                    Photo
                  </label>
                  <input
                    type="text"
                    name="PhotoUrl"
                    required
                    placeholder="Photo"
                    className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-green-600"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block font-semibold text-blue-600"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    id="email"
                    placeholder="exapmple@gmail.com"
                    className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-green-600"
                  />
                </div>
                {/*  */}

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block font-semibold text-blue-600"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    required
                    placeholder="*****************************"
                    className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-green-600"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block font-semibold text-blue-600"
                  >
                    Confrim Password
                  </label>
                  <input
                    type="password"
                    name="ConfrimPassword"
                    required
                    placeholder="*****************************"
                    className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-green-600"
                  />
                </div>
              </div>
              <button
                className="w-full px-8 py-3 font-semibold rounded-md bg-blue-600 text-gray-50"
                onSubmit={SubmitForm}
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
