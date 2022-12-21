import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Assest/logo.ico";

const Footer = () => {
  return (
    // <div className="mt-4">
    //   <footer
    //     aria-label="Site Footer"
    //     className="bg-gray-900 text-white lg:grid lg:grid-cols-5"
    //   >
    //     <div className="hidden lg:relative lg:col-span-2 lg:block">
    //       <img
    //         alt="Art"
    //         src="https://images.unsplash.com/photo-1642370324100-324b21fab3a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
    //         className="absolute inset-0 h-full w-full object-cover"
    //       />
    //     </div>

    //     <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
    //       <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
    //         <div>
    //           <p className="font-medium">
    //             <span className="text-xs uppercase tracking-widest">
    //               {" "}
    //               Call{" "}
    //             </span>

    //             <Link
    //               className="block text-2xl hover:opacity-75 sm:text-3xl"
    //               href=""
    //             >
    //               0123456789
    //             </Link>
    //           </p>

    //           <ul className="mt-8 space-y-2 text-sm">
    //             <li>Monday to Friday: 10am - 5pm</li>
    //             <li>Weekend: 10am - 3pm</li>
    //           </ul>

    //           <div className="mt-16 flex gap-3">
    //             <Link
    //               className="rounded-full border border-white/25 p-2 hover:opacity-75"
    //               href=""
    //               target="_blank"
    //               rel="noreferrer"
    //             >
    //               <span className="sr-only"> Facebook </span>

    //               <svg
    //                 className="h-4 w-4"
    //                 fill="currentColor"
    //                 viewBox="0 0 24 24"
    //                 aria-hidden="true"
    //               >
    //                 <path
    //                   fillRule="evenodd"
    //                   d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
    //                   clipRule="evenodd"
    //                 />
    //               </svg>
    //             </Link>

    //             <Link
    //               className="rounded-full border border-white/25 p-2 hover:opacity-75"
    //               href=""
    //               target="_blank"
    //               rel="noreferrer"
    //             >
    //               <span className="sr-only"> Instagram </span>

    //               <svg
    //                 className="h-4 w-4"
    //                 fill="currentColor"
    //                 viewBox="0 0 24 24"
    //                 aria-hidden="true"
    //               >
    //                 <path
    //                   fillRule="evenodd"
    //                   d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
    //                   clipRule="evenodd"
    //                 />
    //               </svg>
    //             </Link>

    //             <Link
    //               className="rounded-full border border-white/25 p-2 hover:opacity-75"
    //               href=""
    //               target="_blank"
    //               rel="noreferrer"
    //             >
    //               <span className="sr-only"> Twitter </span>

    //               <svg
    //                 className="h-4 w-4"
    //                 fill="currentColor"
    //                 viewBox="0 0 24 24"
    //                 aria-hidden="true"
    //               >
    //                 <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
    //               </svg>
    //             </Link>

    //             <Link
    //               className="rounded-full border border-white/25 p-2 hover:opacity-75"
    //               href=""
    //               target="_blank"
    //               rel="noreferrer"
    //             >
    //               <span className="sr-only"> GitHub </span>

    //               <svg
    //                 className="h-4 w-4"
    //                 fill="currentColor"
    //                 viewBox="0 0 24 24"
    //                 aria-hidden="true"
    //               >
    //                 <path
    //                   fillRule="evenodd"
    //                   d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    //                   clipRule="evenodd"
    //                 />
    //               </svg>
    //             </Link>

    //             <Link
    //               className="rounded-full border border-white/25 p-2 hover:opacity-75"
    //               href=""
    //               target="_blank"
    //               rel="noreferrer"
    //             >
    //               <span className="sr-only"> Dribbble </span>

    //               <svg
    //                 className="h-4 w-4"
    //                 fill="currentColor"
    //                 viewBox="0 0 24 24"
    //                 aria-hidden="true"
    //               >
    //                 <path
    //                   fillRule="evenodd"
    //                   d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
    //                   clipRule="evenodd"
    //                 />
    //               </svg>
    //             </Link>
    //           </div>
    //         </div>

    //         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
    //           <div>
    //             <p className="font-medium">Support</p>

    //             <nav
    //               aria-label="Footer Nav"
    //               className="mt-4 flex flex-col space-y-2 text-sm text-gray-300"
    //             >
    //               <Link className="hover:opacity-75" href="">
    //                 {" "}
    //                 Contact{" "}
    //               </Link>
    //               <Link className="hover:opacity-75" href="">
    //                 {" "}
    //                 FAQs{" "}
    //               </Link>
    //               <Link className="hover:opacity-75" href="">
    //                 {" "}
    //                 Live Chat{" "}
    //               </Link>
    //               <Link className="hover:opacity-75" href="">
    //                 {" "}
    //                 Forums{" "}
    //               </Link>
    //             </nav>
    //           </div>

    //           <div>
    //             <p className="font-medium">Products</p>

    //             <nav className="mt-4 flex flex-col space-y-2 text-sm text-gray-300">
    //               <Link className="hover:opacity-75" href="">
    //                 {" "}
    //                 1to1 Coaching{" "}
    //               </Link>
    //               <Link className="hover:opacity-75" href="">
    //                 {" "}
    //                 Lesson Plans{" "}
    //               </Link>
    //               <Link className="hover:opacity-75" href="">
    //                 {" "}
    //                 Meal Plans{" "}
    //               </Link>
    //               <Link className="hover:opacity-75" href="">
    //                 {" "}
    //                 Gym Sessions{" "}
    //               </Link>
    //             </nav>
    //           </div>
    //         </div>
    //       </div>

    //       <div className="mt-12 border-t border-gray-800 pt-12">
    //         <div className="text-sm text-gray-300 sm:flex sm:items-center sm:justify-between">
    //           <div className="flex gap-3">
    //             <Link className="hover:opacity-75" href="">
    //               {" "}
    //               Privacy Policy{" "}
    //             </Link>
    //             <Link className="hover:opacity-75" href="">
    //               {" "}
    //               Terms & Conditions{" "}
    //             </Link>
    //             <Link className="hover:opacity-75" href="">
    //               {" "}
    //               Returns Policy{" "}
    //             </Link>
    //           </div>

    //           <p className="mt-4 sm:mt-0">&copy; 2022 Company Name.</p>
    //         </div>

    //         <p className="mt-8 text-xs text-gray-500">
    //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
    //           mollitia quia quod repellendus. Porro harum, odio dolore
    //           perspiciatis praesentium provident esse consequatur quibusdam
    //           aperiam, cupiditate omnis modi in quasi? In, maxime odio vel
    //           repellat sed earum? Debitis quaerat facilis animi. Odio natus
    //           nostrum laboriosam impedit magnam praesentium asperiores
    //           consectetur ipsum.
    //         </p>
    //       </div>
    //     </div>
    //   </footer>
    // </div>

    <footer>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="-mb-0.5 w-full"
        viewBox="0 0 1367.743 181.155"
      >
        <path
          className="fill-current text-gray-100 dark:text-gray-800"
          id="wave"
          data-name="wave"
          d="M0,0S166.91-56.211,405.877-49.5,715.838,14.48,955.869,26.854,1366,0,1366,0V115H0Z"
          transform="translate(1.743 66.155)"
        ></path>
      </svg>
      <div className="bg-gradient-to-b from-gray-100 to-transparent dark:from-gray-800 dark:to-transparent pt-1">
        <div className="container m-auto space-y-8 px-6 text-gray-600 dark:text-gray-400 md:px-12 lg:px-20">
          <div className="grid grid-cols-8 gap-6 md:gap-0">
            <div className="col-span-8 border-r border-gray-100 dark:border-gray-800 md:col-span-2 lg:col-span-3">
              <div className="flex items-center justify-between gap-6 border-b border-white dark:border-gray-800 py-6 md:block md:space-y-6 md:border-none md:py-0">
                <img
                  src={logo}
                  alt="logo tailus"
                  width="100"
                  height="42"
                  className="w-32 dark:brightness-200 dark:grayscale"
                />
                <div className="flex gap-6">
                  <Link aria-label="github" className="hover:text-cyan-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-github"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                  </Link>
                  <a
                    href="#"
                    target="blank"
                    aria-label="twitter"
                    className="hover:text-cyan-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-twitter"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    target="blank"
                    aria-label="medium"
                    className="hover:text-cyan-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-medium"
                      viewBox="0 0 16 16"
                    >
                      <path d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8zm4.95 0c0 2.34-1.01 4.236-2.256 4.236-1.246 0-2.256-1.897-2.256-4.236 0-2.34 1.01-4.236 2.256-4.236 1.246 0 2.256 1.897 2.256 4.236zM16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-span-8 md:col-span-6 lg:col-span-5">
              <div className="grid grid-cols-2 gap-6 pb-16 sm:grid-cols-3 md:pl-16">
                <div>
                  <h6 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                    Company
                  </h6>
                  <ul className="mt-4 list-inside space-y-4">
                    <li>
                      <Link className="transition hover:text-cyan-600">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="transition hover:text-cyan-600">
                        Customers
                      </Link>
                    </li>
                    <li>
                      <Link className="transition hover:text-cyan-600">
                        Enterprise
                      </Link>
                    </li>
                    <li>
                      <Link className="transition hover:text-cyan-600">
                        Partners
                      </Link>
                    </li>
                    <li>
                      <Link className="transition hover:text-cyan-600">
                        Jobs
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h6 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                    Products
                  </h6>
                  <ul className="mt-4 list-inside space-y-4">
                    <li>
                      <Link className="transition hover:text-cyan-600">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="transition hover:text-cyan-600">
                        Customers
                      </Link>
                    </li>
                    <li>
                      <Link className="transition hover:text-cyan-600">
                        Enterprise
                      </Link>
                    </li>
                    <li>
                      <Link className="transition hover:text-cyan-600">
                        Partners
                      </Link>
                    </li>
                    <li>
                      <Link className="transition hover:text-cyan-600">
                        Jobs
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h6 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                    Ressources
                  </h6>
                  <ul className="mt-4 list-inside space-y-4">
                    <li>
                      <Link className="transition hover:text-cyan-600">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="transition hover:text-cyan-600">
                        Customers
                      </Link>
                    </li>
                    <li>
                      <Link className="transition hover:text-cyan-600">
                        Enterprise
                      </Link>
                    </li>
                    <li>
                      <Link className="transition hover:text-cyan-600">
                        Partners
                      </Link>
                    </li>
                    <li>
                      <Link className="transition hover:text-cyan-600">
                        Jobs
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" border-gray-100 dark:border-gray-800 py-4 pb-8 md:pl-16">
        Pro Photo All right reserved 2022
      </div>
    </footer>
  );
};

export default Footer;
