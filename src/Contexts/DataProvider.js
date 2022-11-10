import React, { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [Data, setData] = useState([]);

  // console.log(displayData);
  // https://review-server-iota.vercel.app/
  useEffect(() => {
    fetch(`https://review-server-iota.vercel.app/`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.result);
        // return console.log("API", data.result);
      });
  }, []);
  const data = { Data };
  return (
    <div>
      <DataContext.Provider value={data}>{children}</DataContext.Provider>
    </div>
  );
};

export default DataProvider;
