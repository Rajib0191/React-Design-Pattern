import axios from "axios";
import React, { useEffect, useState } from "react";

export const singleUser = (Component) => {
  return (props) => {
    const { userId } = props;
    const [userDetails, setUserDetails] = useState(null);

    //   =====Fetch Single User=====
    const fetchUserDetails = async (userId) => {
      try {
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        setUserDetails(res?.data);
      } catch (error) {
        console.log(error);
      }
    };

    useEffect(() => {
      if (userId) {
        fetchUserDetails(userId);
      }
    }, [userId]);

    return <Component {...props} user={userDetails} />;
  };
};
