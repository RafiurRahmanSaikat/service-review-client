import { Button } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CatCard from "./CatCard";
import Hero from "./Hero";
const Home = () => {
  const [Data, setData] = useState([]);
  const [displayData, SetDisplayData] = useState(3);
  // console.log(displayData);
  // https://review-server-iota.vercel.app/
  useEffect(() => {
    fetch(`https://review-server-iota.vercel.app/?data=${displayData}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.result);
        // return console.log("API", data.result);
      });
  }, [displayData]);

  // console.log("State DATA", Data);
  return (
    <div>
      <Hero></Hero>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-12 p-14 ">
        {Data.map((items) => (
          <div key={items._id}>
            <CatCard key={items._id} data={items}></CatCard>
          </div>
        ))}
      </div>
      <Link to='/services'>
        <Button
          onClick={() => SetDisplayData(0)}
          className="w-[10em]"
          color="blue"
        >
          See All
        </Button>
      </Link>
    </div>
  );
};

export default Home;
