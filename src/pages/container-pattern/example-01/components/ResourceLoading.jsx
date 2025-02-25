import axios from "axios";
import React, { useEffect, useState } from "react";

const ResourceLoading = ({ resouceUrl, resourceName, children }) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get(resouceUrl);
      setResource(response.data);
    })();
  }, [resouceUrl]);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [resourceName]: resource });
        }
        return child;
      })}
    </>
  );
};

export default ResourceLoading;
