import { Button } from "@material-tailwind/react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import avt from "../../Assest/avatar.png";
import logo from "../../Assest/logo.ico";
import { AuthContext } from "../../Contexts/AuthProvider";
const ProfileDropDown = (props) => {
  return <div className={`relative ${props.class}`}></div>;
};

export default () => {
  const { user, LogOut } = useContext(AuthContext);
  console.log(user);
  const [menuState, setMenuState] = useState(false);

  return (
    <nav className=" bg-white border-b">
      <div className="flex  justify-between  space-x-8 py-3 px-4 max-w-screen-xl mx-auto">
        <div className="flex justify-between ">
          <Link to="/">
            <img src={logo} width={80} height={50} alt="logo" />
          </Link>
        </div>

        <div className=" flex items-center justify-between">
          <div
            className={`bg-white absolute z-20 w-full top-16 left-0 p-4 border-b lg:static lg:block lg:border-none ${
              menuState ? "" : "hidden"
            }`}
          >
            <ul className="mt-12 space-y-5 lg:flex lg:space-x-6 lg:space-y-0 lg:mt-0">
              {user ? (
                <>
                  <li className="text-gray-600 hover:text-gray-900">
                    <Link to="./blogs">
                      <Button className="w-auto" color="blue">
                        {" Blogs"}
                      </Button>
                    </Link>
                  </li>
                  <li className="text-gray-600 hover:text-gray-900">
                    <Link to={`/myreview/${user.email}`}>
                      <Button className="w-auto" color="amber">
                        {" My Review"}
                      </Button>
                    </Link>
                  </li>
                  <li className="text-gray-600 hover:text-gray-900">
                    <Link to={`/addservice/`}>
                      <Button className="w-auto" color="amber">
                        {" Add Service"}
                      </Button>
                    </Link>
                  </li>
                  <li className="text-gray-600 hover:text-gray-900">
                    <Link to="./">
                      <Button onClick={LogOut} className="w-auto" color="red">
                        {" log Out"}
                      </Button>
                    </Link>
                  </li>
                  <li className="text-gray-600 hover:text-gray-900">
                    <div className="grid  justify-center items-center">
                      <img
                        className="w-12 h-12 mx-auto rounded-full justify-center items-center "
                        src={user?.photoURL}
                        alt=""
                      />
                      <p className="text-center">{user?.displayName} </p>
                    </div>
                  </li>
                </>
              ) : (
                <>
                  <li className="text-gray-600 hover:text-gray-900">
                    <Link to="./blogs">
                      <Button className="w-auto" color="blue">
                        {" Blogs"}
                      </Button>
                    </Link>
                  </li>

                  <li className="text-gray-600 hover:text-gray-900">
                    <Link to="./login">
                      <Button className="w-auto" color="green">
                        {" Login"}
                      </Button>
                    </Link>
                  </li>
                  <li className="text-gray-600 hover:text-gray-900">
                    <div className="grid  justify-center items-center">
                      <img
                        className="w-12 h-12 mx-auto rounded-full justify-center items-center "
                        src={avt}
                        alt=""
                      />
                    </div>
                  </li>
                </>
              )}
            </ul>
            <ProfileDropDown className="mt-5 pt-5 border-t lg:hidden" />
          </div>

          <div className="flex-1 flex items-center justify-end space-x-2 sm:space-x-6">
            <ProfileDropDown className="hidden lg:block" />
            <button
              className="outline-none text-gray-400 block lg:hidden"
              onClick={() => setMenuState(!menuState)}
            >
              {menuState ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
