import { useEffect, useState } from "react";

export function useUsers(apiService) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    apiService.getUsers().then(setUsers);
  }, [apiService]);

  return users;
}
