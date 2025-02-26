import { useEffect, useState } from "react";

export const useProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      })
      .catch((error) => console.error("Error fetching user:", error));
  }, []);

  return user;
};
