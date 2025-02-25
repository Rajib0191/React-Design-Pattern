import React, { useEffect, useState } from "react";

const DataSourceLoading = ({ getData = () => {}, resourceName, children }) => {
  const [resource, setResource] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getData();
      setResource(data);
    })();
  }, [getData]);

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

export default DataSourceLoading;
