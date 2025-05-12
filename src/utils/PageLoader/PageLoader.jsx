import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";

const PageLoader = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return loading ? <Loader /> : children;
};

export default PageLoader;
