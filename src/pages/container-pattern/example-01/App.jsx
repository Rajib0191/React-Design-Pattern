import React from "react";
import UserInfo from "./components/UserInfo";
// import CompLoading from "./components/CompLoading";
// import ResourceLoading from "./components/ResourceLoading";
// import DataSourceLoading from "./components/DataSourceLoading";
import DataSourceWithRenderProps from "./components/DataSourceWithRenderProps";
import axios from "axios";

const fetchData = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

const App = () => {
  return (
    <div>
      {/* <CompLoading>
        <UserInfo />
      </CompLoading> */}

      {/* <ResourceLoading
        resouceUrl={`https://jsonplaceholder.typicode.com/users`}
        resourceName={"user"}
      >
        <UserInfo />
      </ResourceLoading> */}

      {/* <DataSourceLoading
        getData={() => fetchData(`https://jsonplaceholder.typicode.com/users`)}
        resourceName={"user"}
      >
        <UserInfo />
      </DataSourceLoading> */}

      <DataSourceWithRenderProps
        getData={() => fetchData(`https://jsonplaceholder.typicode.com/users`)}
        render={(resource) => <UserInfo user={resource} />}
      />
    </div>
  );
};

export default App;
