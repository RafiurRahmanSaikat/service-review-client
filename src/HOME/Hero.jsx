import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="mb-10 flex flex-col items-center justify-center lg:flex-row">
      <div className="my-10 lg:my-0 w-full lg:my-20 lg:w-1/2 lg:pr-5">
        <div className="w-8/12 mx-auto">
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight sm:text-center sm:text-5xl lg:text-left">
            Hi I’m Ronny, I am a Profetional{" "}
            <span className="text-teal-500">Photographer</span>
          </h1>
          <p className="text-md my-7 text-justify font-semibold leading-6 text-gray-400 sm:text-xl">
            Hi I’m Ronny, A Sydney photographer who loves capturing I am so
            happy you are here I am Creek Street Photography’s professional
            photographer. I have received a Master of Arts in Photography and
            take immense pride in being renowned as one of the most experienced.
            and trusted wedding photographers working in Sydney today. We have
            more than 100 five stars google reviews and countless kind words
            from our beautiful couples and families.
          </p>
          <div>
            <Link className="mb-3 block w-full rounded border border-teal-500 bg-teal-600 py-2 px-5 text-center text-xl font-semibold text-white transition-all hover:bg-transparent hover:text-teal-500 active:bg-teal-50 disabled:border-gray-200 disabled:bg-gray-200 disabled:text-gray-500 lg:mb-0 lg:mr-3 lg:inline-block lg:w-auto lg:text-left">
            Hire Me
            </Link>
            
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2  lg:p-4">
        <img
          className="w-full  max-w-full object-cover lg:h-96 lg:h-full lg:w-full rounded-2xl"
          src="https://images.unsplash.com/photo-1490638114763-02630949efda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="Hero Image"
        />
      </div>
    </div>
  );
};

export default Hero;
