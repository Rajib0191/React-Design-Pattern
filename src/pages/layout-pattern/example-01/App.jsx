import React from "react";
import LeftSide from "./component/LeftSide";
import RightSide from "./component/RightSide";
import Layout from "./component/Layout";

const App = () => {
  return (
    <Layout leftWidth={1} rightWidth={3}>
      <LeftSide title="Left Side Comp" />
      <RightSide title="Right Side Comp" />
    </Layout>
  );
};

export default App;
