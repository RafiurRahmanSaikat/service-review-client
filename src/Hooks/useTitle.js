import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `Pro Photo- ${title}`;
  }, [title]);
};

export default useTitle;
