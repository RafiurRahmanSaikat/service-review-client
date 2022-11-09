import { Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useTitle from "../Hooks/useTitle";

export const Service = () => {
  useTitle("Services")
  const [Data, setData] = useState([]);
  const [displayData, SetDisplayData] = useState(0);
  // https://review-server-iota.vercel.app/
  useEffect(() => {
    fetch(`https://review-server-iota.vercel.app/?data=${displayData}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.result);
        // return console.log("Inside API", data.result);
      });
  }, [displayData]);

  // console.log(Data[0]);

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
        <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
          <span className=" inline-block mb-1 sm:mb-4">
            I am a Profetional
            <br className="hidden md:block" />
            <span className="text-teal-500 ml-4">Photographer</span>
          </span>
          <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
        </h2>
        <p className="text-gray-700 font-semibold text-justify lg:text-md lg:max-w-md">
          I have received a Master of Arts in Photography and take immense pride
          in being renowned as one of the most experienced. and trusted wedding
          photographers working in Sydney today. We have more than 100 five
          stars google reviews and countless kind words from our beautiful
          couples and families.
        </p>
      </div>
      <div className="grid gap-14  mb-8 lg:grid-cols-1 sm:row-gap-6 sm:grid-cols-2">
        {/*ALL Service Card  Starts */}

        {Data.map(({ _id, CatName, categoryimg, details }) => (
          <section key={_id} aria-label="View Item">
            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover rounded-lg min-w-full min-h-full h-56 md:h-64 xl:h-80"
                src={categoryimg}
                alt={CatName}
              />

              <div className="absolute inset-0 px-6  py-4 transition-opacity duration-200 bg-black bg-opacity-50 opacity-0 hover:opacity-100"></div>
            </div>

            <div className="mt-5 pt-8 md:pt-0">
              <div>
                <div className="mt-2">
                  <h3 className="text-xl text-gray-900 font-semibold hover:underline">
                    {CatName}
                  </h3>
                  <p className="text-gray-800 mt-1 text-justify leading-relaxed ">
                    {details}
                  </p>
                </div>

                <Link to={`/services/${_id}`}>
                  <Button className="mt-4 " size="sm">
                    SEE REVIEW
                  </Button>
                </Link>
              </div>
            </div>

            {/* <div className="text-black text-start border-spacing-2 outline-2 outline outline-offset-2 mt-4 outline-green-600 rounded-xl">
              <p>{details}</p>
            </div> */}
          </section>
        ))}
      </div>
    </div>
  );
};
