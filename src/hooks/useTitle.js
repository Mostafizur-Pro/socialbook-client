import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - social zone`;
  }, [title]);
};

export default useTitle;
