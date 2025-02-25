import React, {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useState,
} from "react";
import axios from "axios";

const CompLoading = ({ children }) => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/users`
        );
        if (res?.data) {
          setUserData(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    })();

    // fetchData();
  }, []);

  return (
    <>
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          return cloneElement(child, { user: userData });
        }

        return child;
      })}
    </>
  );
};

export default CompLoading;
