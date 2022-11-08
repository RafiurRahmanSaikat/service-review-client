import { Button } from "@material-tailwind/react";
import React from "react";
import data from "../data.json";
import CatCard from "./CatCard";
import Hero from "./Hero";
const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-12 p-14 ">
        {data.map((items) => (
          <div key={items.categoryid}>
            <CatCard data={items}></CatCard>
          </div>
        ))}
      </div>
      <Button className="w-[10em]" color="blue">
        See All
      </Button>
    </div>
  );
};

export default Home;
