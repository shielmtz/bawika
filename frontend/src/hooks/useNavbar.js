import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const useNavbar = () => {
  const location = useLocation();
  const [pathname, setPathname] = useState(location.pathname);

  useEffect(() => {
    setPathname(location.pathname);
  }, [location]);

  return { pathname };
};

export default useNavbar;
