import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import RegPic from "../Assest/login.svg";
import { AuthContext } from "../Contexts/AuthProvider";
import useTitle from "../Hooks/useTitle";
const Login = () => {
  useTitle("Login")
  const [error, setError] = useState(null);
  const { login, GoogleSignIn, GithubLogIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";

  const SubmitForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    login(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        setError("You are successfully logged in");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  const GitLogin = () => {
    GithubLogIn()
      .then((result) => {
        navigate(from, { replace: true });
      })

      .catch((error) => setError(error?.message));
  };

  const GoogleLogIn = () => {
    GoogleSignIn()
      .then((res) => navigate(from, { replace: true }))
      .catch((error) => setError(error?.message));
  };
  return (
    <>
      <section className=" relative overflow h-[90vh]">
        <img
          src={RegPic}
          className="absolute  h-[100vh] w-[100vw] object-center"
        />
        <h1 className="text-5xl text-black font-bold underline decoration-yellow-400">
          {" "}
          Login to your account
        </h1>
        <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-2 xl:py-4">
          <div className="w-[50vh] mx-auto bg-gray-200 p-10 rounded-3xl  font-mono flex flex-col items-center relative z-10">
            <Link to="/register" className="text-sm text-center text-green-700">
              Don't have account ?
              <span className="focus:underline ml-2 text-red-500 hover:underline">
                Sign up here
              </span>
            </Link>
            <div className="my-6 space-y-4">
              <button
                onClick={GoogleLogIn}
                aria-label="Login with Google"
                type="button"
                className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-600 focus:ring-green-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                </svg>
                <p>Login with Google</p>
              </button>
              <button
                onClick={GitLogin}
                aria-label="Login with GitHub"
                role="button"
                className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-600 focus:ring-green-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                </svg>
                <p>Login with GitHub</p>
              </button>
            </div>
            <div className="flex items-center w-full my-4">
              <hr className="w-full text-gray-600" />
              <p className="px-3 text-gray-600">OR</p>
              <hr className="w-full text-gray-600" />
            </div>
            <form
              onSubmit={SubmitForm}
              className="space-y-8 ng-untouched ng-pristine ng-valid"
            >
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="leroy@jenkins.com"
                    className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-green-600"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <label htmlFor="password" className="text-sm">
                      Password
                    </label>
                    <Link
                      rel="noopener noreferrer"
                      className="text-xs hover:underline text-gray-600"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="*****"
                    className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-green-600"
                  />
                </div>
              </div>
              <button
                className="w-full px-8 py-3 font-semibold rounded-md bg-green-600 text-gray-50"
                onSubmit={SubmitForm}
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
export default Login;
