import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { id } = useParams();

  const [Data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://review-server-iota.vercel.app/services/?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.result);
        // return console.log("Inside API", data.result);
      });
  }, []);

  const { CatName, categoryid, categoryimg, details, price, review } = Data;

//   console.log(
//     "OUT OF API",
//     CatName,
//     categoryid,
//     categoryimg,
//     details,
//     price,
//     review
//   );
  return (
    <div>
      <h1>This is details of {CatName}</h1>
      <img src={categoryimg} alt="" />
    </div>
  );
};

export default ServiceDetails;
