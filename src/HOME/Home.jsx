import { Button } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../Components/Loader";
import useTitle from "../Hooks/useTitle";
import CatCard from "./CatCard";
import Hero from "./Hero";
import Newsletter from "./Newsletter";
import SatisfiedClients from "./SatisfiedClients";

const Home = () => {
  useTitle("Home")
  const [Data, setData] = useState([]);
  const [displayData, SetDisplayData] = useState(3);
  const [dataLoading, setDataLoading] = useState(true);
  // console.log(displayData);

  useEffect(() => {
    fetch(`https://review-server-iota.vercel.app/?data=${displayData}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.result);
        // return console.log("API", data.result);
        setDataLoading(false);
      });
  }, [displayData]);
  // console.log("State DATA", Data);
  return (
    <div>
      <Hero></Hero>
      <hr className="h-2 rounded-lg bg-gray-300   m-4" />
      {dataLoading ? (
        <Loader></Loader>
      ) : (
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-12 p-14 ">
          {Data.map((items) => (
            <div key={items._id}>
              
              <CatCard key={items._id} data={items}></CatCard>
            </div>
          ))}
        </div>
      )}
      <hr className="h-2 rounded-lg bg-gray-300   m-4" />
      <Link to="/services">
        <Button
          onClick={() => SetDisplayData(0)}
          className="w-[10em]"
          color="blue"
        >
          See All
        </Button>
      </Link>
      <SatisfiedClients data={Data}></SatisfiedClients>
      <hr className="h-2 rounded-lg bg-gray-300   m-4" />
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
